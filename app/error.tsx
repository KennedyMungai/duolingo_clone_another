'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const ErrorPage = (props: Props) => {
	return (
		<div className='h-full text-white bg-rose-600 flex flex-col items-center justify-center gap-5'>
			<div className='flex items-center gap-5 justify-center'>
				<Image src={'mascot.svg'} width={60} height={60} alt='Mascot' />
				<p className='font-bold text-3xl'>Error</p>
			</div>

			<Button size='lg' variant={'ghost'} asChild>
				<Link href={'/'}>Go Back</Link>
			</Button>
		</div>
	)
}

export default ErrorPage
