import Image from 'next/image'

const Header = () => {
	return (
		<header className='h-20 border-b-2 border-slate-200 px-4'>
			<div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
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
			</div>
		</header>
	)
}

export default Header
