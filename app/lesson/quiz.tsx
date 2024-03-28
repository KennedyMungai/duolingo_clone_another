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
	const [challenges] = useState(initialLessonChallenges)
	const [activeIndex, setActiveIndex] = useState(() => {
		const uncompletedIndex = challenges.findIndex(
			(challenge) => !challenge.completed
		)

		return uncompletedIndex === -1 ? 0 : uncompletedIndex
	})

	const challenge = challenges[activeIndex]

	const title =
		challenge.type === 'ASSIST'
			? 'Select the correct meaning'
			: challenge.question

	return (
		<>
			<Header
				hearts={hearts}
				percentage={percentage}
				hasActiveSubscription={!!userSubscription?.isActive}
			/>
			<div className='flex-1'>
				<div className='h-full flex items-center justify-center'>
					<div className='lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12'>
						<h1 className='text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700'>
							{title}
						</h1>
						<div>{/* TODO: Challenge component */}</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Quiz
