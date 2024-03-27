import * as schema from '@/db/schema'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

const main = async () => {
	try {
		console.log('Seeding database')

		await db.delete(schema.courses)
		await db.delete(schema.userProgress)

		await db
			.insert(schema.courses)
			.values([{ title: 'Spanish', imageSrc: '/es.svg' }])

		console.log('Seeding finished')
	} catch (error) {
		console.error(error)

		throw new Error('Failed to seed the database')
	}
}

main()
