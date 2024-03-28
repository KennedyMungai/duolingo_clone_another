import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const LessonsLayout = ({ children }: Props) => {
	return (
		<div className='flex flex-col h-full'>
			<div className='flex flex-col h-full w-full'>{children}</div>
		</div>
	)
}

export default LessonsLayout
