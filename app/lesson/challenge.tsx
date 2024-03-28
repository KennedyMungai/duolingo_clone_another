import { challengeOptions, challenges } from '../../db/schema'
type Props = {
	options: (typeof challengeOptions.$inferSelect)[]
	onSelect: (id: string) => void
	status: 'correct' | 'wrong' | 'none'
	selectedOption?: number
	disabled?: boolean
	type: (typeof challenges.$inferInsert)['type']
}

const Challenge = ({
	disabled,
	onSelect,
	options,
	selectedOption,
	status,
	type
}: Props) => {
	return <div>Challenge</div>
}

export default Challenge
