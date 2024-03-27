import { lessons } from '@/db/schema'
import React from 'react'

type Props = {
	id: string
	order: number
	description: string
	title: string
	lessons: (typeof lessons.$inferInsert)[]
	activeLesson: any
	activeLessonPercentage: number
}

const Unit = (props: Props) => {
	return <div>Unit</div>
}

export default Unit
