'use client'

import { courses, userProgress } from '@/db/schema'
import Card from './card'

type Props = {
	courses: (typeof courses.$inferInsert)[]
	activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}

const List = ({ activeCourseId, courses }: Props) => {
	return (
		<div className='pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-full,minmax(210px,1fr))] gap-4'>
			{courses.map((course) => (
				<Card
					key={course.id}
					id={course.id!}
					title={course.title}
					imageSrc={course.imageSrc}
					onClick={() => {}}
					disabled={false}
					active={course.id === activeCourseId}
				/>
			))}
		</div>
	)
}

export default List
