import { lessons, units } from '@/db/schema'
import React from 'react'
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
		</>
	)
}

export default Unit
