import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetOverlay,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'
import SideBar from '@/components/sidebar'
import { Menu } from 'lucide-react'

type Props = {}

const MobileSidebar = (props: Props) => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className='text-white' />
			</SheetTrigger>
			<SheetContent className='p-0 z-[100]' side={'left'}>
				<SideBar />
			</SheetContent>
		</Sheet>
	)
}

export default MobileSidebar
