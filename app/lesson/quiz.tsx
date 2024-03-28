'use client'

import { challengeOptions, challenges } from '@/db/schema'
import { useState } from 'react'
import Header from './header'

type Props = {
	initialLessonId: string
	initialLessonChallenges: (typeof challenges.$inferSelect & {
		completed: boolean
		challengeOptions: (typeof challengeOptions.$inferSelect)[]
	})[]
	initialHearts: number
	initialPercentage: number
	userSubscription: any //TODO: Replace with subscription db type
}

const Quiz = ({
	initialHearts,
	initialLessonChallenges,
	initialLessonId,
	initialPercentage,
	userSubscription
}: Props) => {
	const [hearts, setHearts] = useState(initialHearts)
	const [percentage, setPercentage] = useState(initialPercentage)

	return (
		<>
			<Header
				hearts={hearts}
				percentage={percentage}
				hasActiveSubscription={!!userSubscription?.isActive}
			/>
		</>
	)
}

export default Quiz
