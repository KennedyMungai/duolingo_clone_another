'use client'

type Props = {
	id: string
	index: number
	totalCount: number
	locked?: boolean
	current?: boolean
	percentage: number
}

const LessonButton = ({
	id,
	index,
	percentage,
	totalCount,
	current,
	locked
}: Props) => {
	return <div>{id}</div>
}

export default LessonButton
