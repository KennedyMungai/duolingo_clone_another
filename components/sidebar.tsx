import { cn } from '@/lib/utils'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SideBarItem from './sidebar-item'

type Props = {
	className?: string
}

const SideBar = ({ className }: Props) => {
	return (
		<div
			className={cn(
				'flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
				className
			)}
		>
			<Link href='/learn'>
				<div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
					<Image
						src={'/mascot.svg'}
						alt={'logo'}
						width={40}
						height={40}
					/>
					<h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>
						Lingo
					</h1>
				</div>
			</Link>
			<div className='flex flex-col gap-y-2 flex-1'>
				<SideBarItem
					label={'Learn'}
					iconSrc={'/learn.svg'}
					href={'/learn'}
				/>
				<SideBarItem
					label={'LeaderBoard'}
					iconSrc={'/leaderboard.svg'}
					href={'/leaderboard'}
				/>
				<SideBarItem
					label={'Quests'}
					iconSrc={'/quests.svg'}
					href={'/quests'}
				/>
				<SideBarItem
					label={'Shop'}
					iconSrc={'/shop.svg'}
					href={'/shop'}
				/>
			</div>
			<div className='absolute bottom-10 left-10'>
				<ClerkLoading>
					<Loader className='w-5 h-5 text-muted-foreground animate-spin' />
				</ClerkLoading>
				<ClerkLoaded>
					<UserButton afterSignOutUrl='/' />
				</ClerkLoaded>
			</div>
		</div>
	)
}

export default SideBar
