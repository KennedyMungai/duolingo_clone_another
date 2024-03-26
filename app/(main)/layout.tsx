import SideBar from '@/components/sidebar'
import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const MainFolderLayout = ({ children }: Props) => {
	return (
		<>
			<SideBar className='hidden lg:flex' />
			<main className='lg:pl-[256px] h-full'>
				<div className='bg-red-500 h-full'>{children}</div>
			</main>
		</>
	)
}

export default MainFolderLayout
