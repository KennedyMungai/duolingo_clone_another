type Props = {
	disabled: boolean
	status: 'correct' | 'wrong' | 'none'
	onCheck: () => void
}

const Footer = ({ disabled, onCheck, status }: Props) => {
	return <div>Footer</div>
}

export default Footer
