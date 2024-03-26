import Image from 'next/image'
import React from 'react'

const NotFoundPage = () => {
	return (
		<div className='h-full text-white bg-rose-500 flex items-center justify-center gap-5'>
			<Image src={'mascot.svg'} width={60} height={60} alt='Mascot' />
			<p className='font-bold text-3xl'>404 Page not found</p>
		</div>
	)
}

export default NotFoundPage
