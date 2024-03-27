'use client'

import { upsertUserProgress } from '@/actions/user-progress'
import { courses, userProgress } from '@/db/schema'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'
import Card from './card'

type Props = {
	courses: (typeof courses.$inferInsert)[]
	activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}

const List = ({ activeCourseId, courses }: Props) => {
	const router = useRouter()

	const [pending, startTransition] = useTransition()

	const onClick = (id: string) => {
		if (pending) return

		if (id === activeCourseId) {
			return router.push('/learn')
		}

		startTransition(() => {
			upsertUserProgress(id).catch(() =>
				toast.error('Something went wrong')
			)
		})
	}

	return (
		<div className='pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-full,minmax(210px,1fr))] gap-4'>
			{courses.map((course) => (
				<Card
					key={course.id}
					id={course.id!}
					title={course.title}
					imageSrc={course.imageSrc}
					onClick={onClick}
					disabled={pending}
					active={course.id === activeCourseId}
				/>
			))}
		</div>
	)
}

export default List
