import { challenges } from '@/db/schema'

type Props = {
	id: string
	text: string
	imageSrc: string | null
	shortcut: string
	selected: boolean
	onClick: () => void
	status: 'correct' | 'wrong' | 'none'
	audioSrc?: string | null
	disabled?: boolean
	type: (typeof challenges.$inferInsert)['type']
}

const Card = ({
	id,
	imageSrc,
	onClick,
	selected,
	shortcut,
	status,
	text,
	type,
	audioSrc,
	disabled
}: Props) => {
	return <div>Card</div>
}

export default Card
