import { lessons, units } from '@/db/schema'
import LessonButton from './lesson-button'
import UnitBanner from './unit-banner'

type Props = {
	id: string
	order: number
	description: string
	title: string
	lessons: (typeof lessons.$inferSelect & { completed: boolean })[]
	activeLesson:
		| (typeof lessons.$inferInsert & {
				unit: typeof units.$inferSelect
		  })
		| undefined
	activeLessonPercentage: number
}

const Unit = ({
	activeLesson,
	activeLessonPercentage,
	description,
	id,
	lessons,
	order,
	title
}: Props) => {
	return (
		<>
			<UnitBanner title={title} description={description} />
			<div className='flex items-center flex-col relative'>
				{lessons.map((lesson, index) => {
					const isCurrent = lesson.id === activeLesson?.id
					const isLocked = !lesson.completed && !isCurrent

					return (
						<LessonButton
							key={lesson.id}
							id={lesson.id}
							index={index}
							totalCount={lessons.length - 1}
							percentage={activeLessonPercentage}
							current={isCurrent}
							locked={isLocked}
						/>
					)
				})}
			</div>
		</>
	)
}

export default Unit
