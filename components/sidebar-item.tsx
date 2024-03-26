'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

type Props = {
	label: string
	iconSrc: string
	href: string
}

const SideBarItem = ({ href, iconSrc, label }: Props) => {
	const pathname = usePathname()

	const active = pathname === href

	return (
		<Button
			variant={active ? 'sidebarOutline' : 'sidebar'}
			className='justify-start h-[52px]'
			asChild
		>
			<Link href={href}>
				<Image
					src={iconSrc}
					height={32}
					width={32}
					className='mr-5'
					alt={label}
				/>
				{label}
			</Link>
		</Button>
	)
}

export default SideBarItem
