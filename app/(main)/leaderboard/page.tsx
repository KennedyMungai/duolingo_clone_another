import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import UserProgress from '@/components/user-progress'
import { getUserProgress, getUserSubscription } from '@/db/queries'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Items from '../shop/items'

const LeaderBoardPage = async () => {
	const userProgress = await getUserProgress()
	const userSubscription = await getUserSubscription()

	if (!userProgress || !userProgress.activeCourse) redirect('/courses')

	return (
		<div className='flex gap-[48px] px-6'>
			<FeedWrapper>
				<div className='w-full flex flex-col items-center'>
					<Image
						src={'/leaderboard.svg'}
						height={90}
						width={90}
						alt='leaderboard'
					/>
					<h1 className='text-center font-bold text-neutral-800 text-2xl my-6'>
						Leaderboard
					</h1>
					<p className='text-muted-foreground text-center text-lg mb-6'>
						See where you stand among other learners in the
						community
					</p>
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

export default LeaderBoardPage
