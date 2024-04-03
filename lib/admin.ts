import { auth } from '@clerk/nextjs'

const allowedIds = ['user_2eDk1lWCuQS7yK6EcAtZW6rhRmj']

export const getIsAdmin = async () => {
	const { userId } = await auth()

	if (!userId) return false

	return allowedIds.indexOf(userId) !== -1
}
