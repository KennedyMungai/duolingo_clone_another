'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const ErrorPage = ({
	error,
	reset
}: {
	error: Error & { digest?: string }
	reset: () => void
}) => {
	useEffect(() => {
		console.log(error)
	}, [error])

	return (
		<div className='h-full text-white bg-rose-600 flex flex-col items-center justify-center gap-5'>
			<div className='flex items-center gap-5 justify-center'>
				<Image
					src={'mascot_sad.svg'}
					width={60}
					height={60}
					alt='Mascot'
				/>
				<p className='font-bold text-3xl'>Error: {error.message}</p>
			</div>

			<Button size='lg' variant={'ghost'} onClick={reset}>
				Reset
			</Button>
		</div>
	)
}

export default ErrorPage
