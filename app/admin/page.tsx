import { getIsAdmin } from '@/lib/admin'
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'

const AdminApp = dynamic(() => import('./app'), { ssr: false })

const AdminPage = async () => {
	const isAdmin = await getIsAdmin()

	if (!isAdmin) redirect('/')

	return <AdminApp />
}

export default AdminPage
