import { challengeOptions, challenges } from '../../db/schema'
type Props = {
	options: (typeof challengeOptions.$inferSelect)[]
	onSelect: () => void
	status: 'correct' | 'wrong'
	selectedOption: typeof challengeOptions.$inferSelect | null
	disabled: boolean
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
