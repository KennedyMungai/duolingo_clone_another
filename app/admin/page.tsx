import dynamic from 'next/dynamic'

const AdminApp = dynamic(() => import('./app'), { ssr: false })

const AdminPage = () => {
	return <AdminApp />
}

export default AdminPage
