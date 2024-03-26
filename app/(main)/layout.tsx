import MobileHeader from '@/components/mobile-header'
import SideBar from '@/components/sidebar'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const MainFolderLayout = ({ children }: Props) => {
	return (
		<>
			<MobileHeader />
			<SideBar className='hidden lg:flex' />
			<main className='lg:pl-[256px] h-full pt-[50px] lg:pt-0'>
				<div className='bg-red-500 h-full'>{children}</div>
			</main>
		</>
	)
}

export default MainFolderLayout
