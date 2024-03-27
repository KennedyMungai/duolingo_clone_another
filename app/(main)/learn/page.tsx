import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import UserProgress from '@/components/user-progress'
import { getUnits, getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'
import Header from './header'
import Unit from './unit'

const LearnPage = async () => {
	const userProgress = await getUserProgress()
	const units = await getUnits()

	if (!userProgress || !userProgress.activeCourse) {
		redirect('/courses')
	}
	return (
		<div className='flex gap-[48px] px-6'>
			<FeedWrapper>
				<Header title={userProgress.activeCourse.title} />
				{units.map((unit) => (
					<div key={unit.id} className='mb-10'>
						<Unit
							id={unit.id}
							order={unit.order}
							description={unit.description}
							title={unit.title}
							lessons={unit.lessons}
							activeLesson={undefined}
							activeLessonPercentage={0}
						/>
					</div>
				))}
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

export default LearnPage
