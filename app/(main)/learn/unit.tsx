import { lessons, units } from '@/db/schema'
import React from 'react'

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
	return <div>Unit</div>
}

export default Unit
