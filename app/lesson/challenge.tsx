import { challengeOptions, challenges } from '@/db/schema'
import { cn } from '@/lib/utils'
import Card from './card'

type Props = {
	options: (typeof challengeOptions.$inferSelect)[]
	onSelect: (id: string) => void
	status: 'correct' | 'wrong' | 'none'
	selectedOption?: string
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
	return (
		<div
			className={cn(
				'grid gap-2',
				type === 'ASSIST'
					? 'grid-cols-1'
					: 'grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]'
			)}
		>
			{options.map((option, index) => (
				<Card
					key={option.id}
					id={option.id}
					text={option.text}
					imageSrc={option.imageSrc}
					shortcut={`${index + 1}`}
					selected={selectedOption === option.id}
					onClick={() => onSelect(option.id)}
					status={status}
					audioSrc={option.audioSrc}
					disabled={disabled}
					type={type}
				/>
			))}
		</div>
	)
}

export default Challenge
