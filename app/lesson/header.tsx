import { X } from 'lucide-react'

type Props = {
	hearts: number
	percentage: number
	hasActiveSubscription: boolean
}

const Header = ({ hasActiveSubscription, hearts, percentage }: Props) => {
	return (
		<header className='lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full'>
			<X
				onClick={() => {}} //TODO: Add onclick exit
				className='text-slate-500 hover:opacity-75 transition cursor-pointer'
			/>
		</header>
	)
}

export default Header
