import { courses } from '@/db/schema'

type Props = {
	courses: (typeof courses.$inferInsert)[]
	activeCourseId: string
}

const List = ({ activeCourseId, courses }: Props) => {
	return <div>List</div>
}

export default List
