import db from '@/db/drizzle'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
	const data = await db.query.courses.findMany()

	return NextResponse.json(data)
}
