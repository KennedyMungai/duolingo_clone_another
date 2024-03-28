import { Loader } from 'lucide-react'

const LearnPageLoader = () => {
	return (
		<div className='w-full h-full items-center justify-center'>
			<Loader className='h-6 w-6 text-muted-foreground animate-spin' />
		</div>
	)
}

export default LearnPageLoader