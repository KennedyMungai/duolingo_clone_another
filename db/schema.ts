import { pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const courses = pgTable('courses', {
	id: uuid('id').defaultRandom().primaryKey(),
	title: text('title').notNull(),
	imageSrc: text('image_source').notNull()
})
