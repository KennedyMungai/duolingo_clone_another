import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const MarketingLayout = ({ children }: Props) => {
	return <div>{children}</div>
}

export default MarketingLayout
