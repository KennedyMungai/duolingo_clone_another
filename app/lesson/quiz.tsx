'use client'

import { challenges } from '@/db/schema'
import { challengeOptions } from '@/db/schema'

type Props = {
	initialLessonId: string
	initialLessonChallenges: typeof challenges.$inferSelect &
		{
			completed: boolean
			challengeOptions: (typeof challengeOptions.$inferSelect)[]
		}[]
	initialHearts: number
	initialPercentage: number
	userSubscription: any //TODO: Replace with subscription db type
}

const Quiz = (props: Props) => {
	return <div>Quiz</div>
}

export default Quiz
