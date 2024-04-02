'use client'

import { upsertChallengeProgress } from '@/actions/challenge-progress'
import { reduceHearts } from '@/actions/user-progress'
import { challengeOptions, challenges } from '@/db/schema'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useAudio, useWindowSize } from 'react-use'
import { toast } from 'sonner'
import Challenge from './challenge'
import Footer from './footer'
import Header from './header'
import QuestionBubble from './question-bubble'
import ResultCard from './result-card'
import Confetti from 'react-confetti'

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
	const { height, width } = useWindowSize()

	const [correctAudio, _c, correctControls] = useAudio({
		src: '/correct.wav'
	})
	const [incorrectAudio, _ic, incorrectControls] = useAudio({
		src: '/incorrect.wav'
	})
	const [finishedAudio] = useAudio({
		src: '/finish.mp3',
		autoPlay: true
	})

	const [hearts, setHearts] = useState(initialHearts)
	const [percentage, setPercentage] = useState(initialPercentage)
	const [challenges] = useState(initialLessonChallenges)
	const [activeIndex, setActiveIndex] = useState(() => {
		const uncompletedIndex = challenges.findIndex(
			(challenge) => !challenge.completed
		)

		return uncompletedIndex === -1 ? 0 : uncompletedIndex
	})
	const [selectedOption, setSelectedOption] = useState<string | undefined>()
	const [status, setStatus] = useState<'correct' | 'wrong' | 'none'>('none')
	const [lessonId] = useState(initialLessonId)

	const [pending, startTransition] = useTransition()

	const challenge = challenges[activeIndex]

	const options = challenge?.challengeOptions ?? []

	const router = useRouter()

	if (!challenge) {
		return (
			<>
				<Confetti
					recycle={false}
					numberOfPieces={500}
					tweenDuration={10000}
					width={width}
					height={height}
				/>
				<div className='flex flex-col gap-y-4 lg:gap-y-8 max-w-lg mx-auto text-center items-center justify-center h-full'>
					<Image
						src='/finished.svg'
						alt={'Finished'}
						className='hidden lg:block'
						height={100}
						width={100}
					/>
					<Image
						src='/finished.svg'
						alt={'Finished'}
						className='block lg:hidden'
						height={50}
						width={50}
					/>
					<h1 className='text-xl lg:text-3xl font-bold text-neutral-700'>
						Great Job <br /> You&apos;ve completed the lesson
					</h1>
					<div className='flex items-center gap-x-4 w-full'>
						<ResultCard
							variant='points'
							value={challenges.length * 10}
						/>
						<ResultCard variant='hearts' value={hearts} />
					</div>
				</div>
				<Footer
					lessonId={lessonId}
					status='completed'
					onCheck={() => router.push('/learn')}
				/>
			</>
		)
	}

	const title =
		challenge.type === 'ASSIST'
			? 'Select the correct meaning'
			: challenge.question

	const onSelect = (id: string) => {
		if (status !== 'none') return

		setSelectedOption(id)
	}

	const onNext = () => {
		setActiveIndex((current) => current + 1)
	}

	const onContinue = () => {
		if (!selectedOption) return

		if (status === 'wrong') {
			setStatus('none')
			setSelectedOption(undefined)

			return
		}

		if (status === 'correct') {
			onNext()
			setStatus('none')
			setSelectedOption(undefined)

			return
		}

		const correctOption = options.find((option) => option.correct)

		if (!correctOption) return

		if (correctOption.id === selectedOption) {
			startTransition(() => {
				upsertChallengeProgress(challenge.id)
					.then((response) => {
						if (response?.error === 'hearts') {
							// openHeartsModal()
							return
						}

						correctControls.play()
						setStatus('correct')
						setPercentage((prev) => prev + 100 / challenges.length)

						// This is a practice
						if (initialPercentage === 100) {
							setHearts((prev) => Math.min(prev + 1, 5))
						}
					})
					.catch(() =>
						toast.error('Something went wrong. Please try again.')
					)
			})
		} else {
			startTransition(() => {
				reduceHearts(challenge.id)
					.then((res) => {
						if (res?.error === 'hearts') {
							console.error('Missing Hearts')
							return
						}

						incorrectControls.play()
						setStatus('wrong')

						if (!res?.error) {
							setHearts((prev) => Math.max(prev - 1, 0))
						}
					})
					.catch(() =>
						toast.error('Something went wrong. Please try again.')
					)
			})
		}
	}

	return (
		<>
			{incorrectAudio}
			{correctAudio}
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
						<div>
							{challenge.type === 'ASSIST' && (
								<QuestionBubble question={challenge.question} />
							)}
							<Challenge
								options={options}
								onSelect={onSelect}
								status={status}
								selectedOption={selectedOption}
								disabled={pending}
								type={challenge.type}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer
				disabled={!selectedOption || pending}
				status={status}
				onCheck={onContinue}
			/>
		</>
	)
}

export default Quiz
