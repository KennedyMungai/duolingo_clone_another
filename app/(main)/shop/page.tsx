import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import UserProgress from '@/components/user-progress'
import { getUserProgress } from '@/db/queries'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Items from './items'

const ShopPage = async () => {
	const userProgress = await getUserProgress()

	if (!userProgress || !userProgress.activeCourse) redirect('/courses')

	return (
		<div className='flex gap-[48px] px-6'>
			<FeedWrapper>
				<div className='w-full flex flex-col items-center'>
					<Image
						src={'/shop.svg'}
						height={90}
						width={90}
						alt='Shop'
					/>
					<h1 className='text-center font-bold text-neutral-800 text-2xl my-6'>
						Shop
					</h1>
					<p className='text-muted-foreground text-center text-lg mb-6'>
						Spend your points on cool stuff
					</p>
					<Items />
				</div>
			</FeedWrapper>
			<StickyWrapper>
				<UserProgress
					activeCourse={userProgress.activeCourse}
					hearts={userProgress.hearts}
					points={userProgress.points}
					hasActiveSubscription={false}
				/>
			</StickyWrapper>
		</div>
	)
}

export default ShopPage
