import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const FeedWrapper = ({ children }: Props) => {
	return <div>{children}</div>
}

export default FeedWrapper
