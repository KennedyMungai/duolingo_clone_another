import { cn } from '@/lib/utils'

type Props = {
	id: string
	title: string
	imageSrc: string
	onClick: (id: string) => void
	disabled?: boolean
	active?: boolean
}

const Card = ({ active, disabled, id, imageSrc, onClick, title }: Props) => {
	return (
		<div
			onClick={() => onClick(id)}
			className={cn(
				'h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]',
				disabled && 'pointer-events-none opacity-50'
			)}
		>
			Card
		</div>
	)
}

export default Card
