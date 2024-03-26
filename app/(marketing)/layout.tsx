import React, { ReactNode } from 'react'
import Header from './header'

type Props = {
	children: ReactNode
}

const MarketingLayout = ({ children }: Props) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-1 flex flex-col items-center justify-center'>
				{children}
			</main>
		</div>
	)
}

export default MarketingLayout
