import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import { Progress } from '@/components/ui/progress'
import UserProgress from '@/components/user-progress'
import { getUserProgress, getUserSubscription } from '@/db/queries'
import Image from 'next/image'
import { redirect } from 'next/navigation'

const quests = [
	{
		title: 'Earn 20 XP',
		value: 20
	},
	{
		title: 'Earn 50 XP',
		value: 50
	},
	{
		title: 'Earn 100 XP',
		value: 100
	},
	{
		title: 'Earn 500 XP',
		value: 500
	},
	{
		title: 'Earn 1000 XP',
		value: 1000
	}
]

const QuestsPage = async () => {
	const userProgress = await getUserProgress()
	const userSubscription = await getUserSubscription()

	if (!userProgress || !userProgress.activeCourse) redirect('/courses')

	return (
		<div className='flex gap-[48px] px-6'>
			<FeedWrapper>
				<div className='w-full flex flex-col items-center'>
					<Image
						src={'/quests.svg'}
						height={90}
						width={90}
						alt='Quests'
					/>
					<h1 className='text-center font-bold text-neutral-800 text-2xl my-6'>
						Quests
					</h1>
					<p className='text-muted-foreground text-center text-lg mb-6'>
						Complete quests by earning points.
					</p>
					<ul className='w-full'>
						{quests.map((quest, index) => {
							const progress =
								(userProgress.points / quest.value) * 100

							return (
								<div
									key={index}
									className='flex items-center w-full p-4 gap-x-4 border-t-2'
								>
									<Image
										src='/points.svg'
										alt='Points'
										width={60}
										height={60}
									/>
									<div className='flex flex-col gap-y-2 w-full'>
										<p className='text-neutral-700 text-xl font-bold'>
											{quest.title}
										</p>
										<Progress
											value={progress}
											className='h-3'
										/>
									</div>
								</div>
							)
						})}
					</ul>
				</div>
			</FeedWrapper>
			<StickyWrapper>
				<UserProgress
					activeCourse={userProgress.activeCourse}
					hearts={userProgress.hearts}
					points={userProgress.points}
					hasActiveSubscription={!!userSubscription?.isActive}
				/>
			</StickyWrapper>
		</div>
	)
}

export default QuestsPage
