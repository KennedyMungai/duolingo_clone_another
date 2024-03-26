import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import Header from './header'

const LearnPage = () => {
	return (
		<div className='flex gap-[48px] px-6'>
			<FeedWrapper><Header title='Spanish' /></FeedWrapper>
			<StickyWrapper>
				My Sticky Wrapper
			</StickyWrapper>
		</div>
	)
}

export default LearnPage
