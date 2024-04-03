'use client'

import simpleRestProvider from 'ra-data-simple-rest'
import { Admin, ListGuesser, Resource } from 'react-admin'

const dataProvider = simpleRestProvider('/api')

const AdminApp = () => {
	return (
		<Admin dataProvider={dataProvider}>
			<Resource
				name='courses'
				recordRepresentation='title'
				list={ListGuesser}
			/>
		</Admin>
	)
}

export default AdminApp
