import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const LearnLayout = ({ children }: Props) => {
	return <div>{children}</div>
}

export default LearnLayout
