type Props = {
	id: string
	title: string
	imageSrc: string
	onClick: () => void
	disabled: boolean
	active: boolean
}

const Card = ({ active, disabled, id, imageSrc, onClick, title }: Props) => {
	return <div>Card</div>
}

export default Card