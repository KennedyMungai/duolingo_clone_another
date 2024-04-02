'use server'

import db from '@/db/drizzle'
import { getCourseById, getUserProgress } from '@/db/queries'
import { challengeProgress, challenges, userProgress } from '@/db/schema'
import { auth, currentUser } from '@clerk/nextjs'
import { and, eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cache } from 'react'

export const upsertUserProgress = cache(async (courseId: string) => {
	const { userId } = await auth()
	const user = await currentUser()

	if (!user || !userId) {
		throw new Error('Unauthorized')
	}

	const course = await getCourseById(courseId)

	if (!course) {
		throw new Error('Course not found!')
	}

	// TODO: Uncomment once units and lessons have been added to the schema
	// if (!course.units.length || !course.units[0].lessons.length) {
	// 	throw new Error('Course is Empty')
	// }

	const existingUserProgress = await getUserProgress()

	if (existingUserProgress) {
		await db.update(userProgress).set({
			activeCourseId: courseId,
			userName: user.firstName ?? 'User',
			userImageSrc: user.imageUrl ?? '/mascot.svg'
		})

		revalidatePath('/courses')
		revalidatePath('/learn')

		redirect('/learn')
	}

	await db.insert(userProgress).values({
		userId,
		activeCourseId: courseId,
		userName: user.firstName ?? 'User',
		userImageSrc: user.imageUrl ?? '/mascot.svg'
	})

	revalidatePath('/courses')
	revalidatePath('/learn')

	redirect('/learn')
})

export const reduceHearts = cache(async (challengeId: string) => {
	const { userId } = await auth()

	if (!userId) throw new Error('Unauthorized')

	const currentUserProgress = await getUserProgress()

	// TODO: Get user subscription

	const challenge = await db.query.challenges.findFirst({
		where: eq(challenges.id, challengeId)
	})

	if (!challenge) throw new Error('Challenge not found')

	const { lessonId } = challenge

	const existingChallengeProgress =
		await db.query.challengeProgress.findFirst({
			where: and(
				eq(challengeProgress.challengeId, challengeId),
				eq(challengeProgress.userId, userId)
			)
		})

	const isPractice = !!existingChallengeProgress

	if (isPractice) return { error: 'Practice' }

	if (!currentUserProgress) throw new Error('User practice not found')

	// TODO: Handle subscription

	if (currentUserProgress.hearts === 0) return { error: 'hearts' }

	await db
		.update(userProgress)
		.set({
			hearts: Math.max(currentUserProgress.hearts - 1, 0)
		})
		.where(eq(userProgress.userId, userId))

	revalidatePath('/shop')
	revalidatePath('/learn')
	revalidatePath('/quests')
	revalidatePath('/leaderboard')
	revalidatePath(`/lesson/${lessonId}`)
})
