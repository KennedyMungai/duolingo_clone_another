import { challenges } from '@/db/schema'

type Props = {
	id: string
	text: string
	imageSrc: string
	shortcut: string
	selected: boolean
	onClick: () => void
	status: 'correct' | 'wrong' | 'none'
	audioSrc?: string
	disabled?: boolean
	type: (typeof challenges.$inferInsert)['type']
}

const Card = (props: Props) => {
	return <div>Card</div>
}

export default Card
