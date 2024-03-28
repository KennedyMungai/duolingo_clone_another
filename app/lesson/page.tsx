import { getLesson, getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'

const LessonPage = async () => {
	const lesson = await getLesson()
	const userProgress = await getUserProgress()

	if (!lesson || !userProgress) redirect('/learn')

	return <div>LessonPage</div>
}

export default LessonPage
