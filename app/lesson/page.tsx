import { getLesson, getUserProgress, getUserSubscription } from '@/db/queries'
import { redirect } from 'next/navigation'
import Quiz from './quiz'

const LessonPage = async () => {
	const lesson = await getLesson()
	const userProgress = await getUserProgress()
	const userSubscription = await getUserSubscription()

	if (!lesson || !userProgress) redirect('/learn')

	const initialPercentage =
		Math.floor(
			lesson.challenges.filter((challenge) => challenge.completed)
				.length / lesson.challenges.length
		) * 100

	return (
		<Quiz
			initialLessonId={lesson.id}
			initialLessonChallenges={lesson.challenges}
			initialHearts={userProgress.hearts}
			initialPercentage={initialPercentage}
			userSubscription={!!userSubscription?.isActive}
		/>
	)
}

export default LessonPage
