import { getLesson, getUserProgress } from '@/db/queries'
import { lessons } from '@/db/schema'
import { redirect } from 'next/navigation'

const LessonPage = async () => {
	const lesson = await getLesson()
	const userProgress = await getUserProgress()

	if (!lesson || !userProgress) redirect('/learn')

	const initialPercentage =
		Math.floor(
			lesson.challenges.filter((challenge) => challenge.completed)
				.length / lesson.challenges.length
		) * 100

	return <div>LessonPage</div>
}

export default LessonPage
