import FeedWrapper from '@/components/feed-wrapper'
import Promo from '@/components/promo'
import Quests from '@/components/quests'
import StickyWrapper from '@/components/sticky-wrapper'
import UserProgress from '@/components/user-progress'
import {
	getCourseProgress,
	getLessonPercentage,
	getUnits,
	getUserProgress,
	getUserSubscription
} from '@/db/queries'
import { redirect } from 'next/navigation'
import Header from './header'
import Unit from './unit'

const LearnPage = async () => {
	const userProgress = await getUserProgress()
	const courseProgress = await getCourseProgress()
	const lessonPercentage = await getLessonPercentage()
	const units = await getUnits()
	const userSubscription = await getUserSubscription()

	if (!userProgress || !userProgress.activeCourse || !courseProgress) {
		redirect('/courses')
	}

	const isPro = !!userSubscription?.isActive

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
							activeLesson={courseProgress.activeLesson}
							activeLessonPercentage={lessonPercentage}
						/>
					</div>
				))}
			</FeedWrapper>
			<StickyWrapper>
				<UserProgress
					activeCourse={userProgress.activeCourse}
					hearts={userProgress.hearts}
					points={userProgress.points}
					hasActiveSubscription={isPro}
				/>
				{!isPro && <Promo />}
				<Quests points={userProgress.points} userProgress={userProgress} />
			</StickyWrapper>
		</div>
	)
}

export default LearnPage
