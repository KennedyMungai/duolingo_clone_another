import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { quests } from '@/constants'
import { userProgress } from '@/db/schema'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	points: number
	userProgress: typeof userProgress.$inferSelect
}

const Quests = ({ points, userProgress }: Props) => {
	return (
		<div className='border-2 rounded-xl p-4 space-y-4 mb-4'>
			<div className='flex items-center justify-between w-full space-y-2'>
				<h3 className='font-bold text-lg'>Quests</h3>
				<Link href='/quests'>
					<Button size='sm' variant='primaryOutline'>
						View All
					</Button>
				</Link>
			</div>
			<ul className='w-full space-y-4'>
				{quests.map((quest, index) => {
					const progress = (userProgress.points / quest.value) * 100

					return (
						<div
							key={index}
							className='flex items-center w-full p-4 gap-x-4 border-t-2'
						>
							<Image
								src='/points.svg'
								alt='Points'
								width={60}
								height={60}
							/>
							<div className='flex flex-col gap-y-2 w-full'>
								<p className='text-neutral-700 text-xl font-bold'>
									{quest.title}
								</p>
								<Progress value={progress} className='h-3' />
							</div>
						</div>
					)
				})}
			</ul>
		</div>
	)
}

export default Quests