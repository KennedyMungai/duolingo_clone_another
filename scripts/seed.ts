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
		await db.delete(schema.challengeProgress)
		await db.delete(schema.challengeOptions)
		await db.delete(schema.units)
		await db.delete(schema.challenges)
		await db.delete(schema.courses)

		await db.insert(schema.courses).values([
			{
				id: '8b79fe7f-0189-47e4-9265-754d67953cd9',
				title: 'Spanish',
				imageSrc: '/es.svg'
			},
			{
				id: '686135ef-5ea4-4ae4-af14-9c731441da0f',
				title: 'French',
				imageSrc: '/fr.svg'
			},
			{
				id: '8dc28ac8-7f04-4136-9c51-b763d87999dc',
				title: 'Croatian',
				imageSrc: '/hr.svg'
			},
			{
				id: '014a8d11-7691-4b13-b877-2103a40bf4cc',
				title: 'Italian',
				imageSrc: '/it.svg'
			},
			{
				id: 'b7d8c897-8aa5-45a9-ae88-ad9c6f8239e0',
				title: 'Japanese',
				imageSrc: '/jp.svg'
			}
		])

		await db.insert(schema.units).values([
			{
				id: 'a1a3e6d5-9e0c-4f3f-9e6c-9e0c4f3f9e6c',
				courseId: '8b79fe7f-0189-47e4-9265-754d67953cd9',
				title: 'Unit 1: Hello World',
				description: 'Hello World',
				order: 1
			}
		])

		await db.insert(schema.lessons).values([
			{
				id: '4703f230-1c5f-4fa6-836f-e84c729e18b0',
				unitId: 'a1a3e6d5-9e0c-4f3f-9e6c-9e0c4f3f9e6c',
				title: 'Nouns',
				order: 1
			},
			{
				id: 'b180de77-a4ce-47f8-94f3-0beddb36ab0d',
				unitId: 'a1a3e6d5-9e0c-4f3f-9e6c-9e0c4f3f9e6c',
				title: 'Verbs',
				order: 2
			},
			{
				id: 'f8f6d7ba-8395-4a53-9a89-1c1ac72deda5',
				unitId: 'a1a3e6d5-9e0c-4f3f-9e6c-9e0c4f3f9e6c',
				title: 'Adjectives',
				order: 3
			},
			{
				id: 'f23a4bc1-6fc3-4fdc-8d6a-9aa6abe0d1ec',
				unitId: 'a1a3e6d5-9e0c-4f3f-9e6c-9e0c4f3f9e6c',
				title: 'Adverbs',
				order: 4
			},
			{
				id: '143c8c71-3c61-4b69-9c81-a12a1cd9b3a2',
				unitId: 'a1a3e6d5-9e0c-4f3f-9e6c-9e0c4f3f9e6c',
				title: 'Pronouns',
				order: 5
			}
		])

		await db.insert(schema.challenges).values([
			{
				id: 'f1d1f8c7-8e0a-4d3f-9e6c-9e0c4f3f9e6c',
				lessonId: '4703f230-1c5f-4fa6-836f-e84c729e18b0',
				type: 'SELECT',
				question: 'Which one of these is "the man"?',
				order: 1
			},
			{
				id: 'faca1df7-b156-48c2-bbe9-50f766a56e61',
				lessonId: '4703f230-1c5f-4fa6-836f-e84c729e18b0',
				type: 'SELECT',
				question: 'Which one of these is "the machine"?',
				order: 2
			},
			{
				id: '76631c3d-69a3-4b2e-ac3f-87dbe7b4b986',
				lessonId: '4703f230-1c5f-4fa6-836f-e84c729e18b0',
				type: 'ASSIST',
				question: '"The Man"',
				order: 3
			},
			{
				id: 'afdceb3d-3b9e-4d95-8b38-327631a7cb54',
				lessonId: '4703f230-1c5f-4fa6-836f-e84c729e18b0',
				type: 'SELECT',
				question: 'Which one of these is "the robot"',
				order: 4
			}
		])

		await db.insert(schema.challengeOptions).values([
			{
				challengeId: 'f1d1f8c7-8e0a-4d3f-9e6c-9e0c4f3f9e6c',
				text: 'El Hombre',
				correct: true,
				imageSrc: '/man.svg',
				audioSrc: '/es_man.mp3'
			},
			{
				challengeId: 'f1d1f8c7-8e0a-4d3f-9e6c-9e0c4f3f9e6c',
				text: 'La Muher',
				correct: false,
				imageSrc: '/woman.svg',
				audioSrc: '/es_woman.mp3'
			},
			{
				challengeId: 'f1d1f8c7-8e0a-4d3f-9e6c-9e0c4f3f9e6c',
				text: 'El Robot',
				correct: false,
				imageSrc: '/robot.svg',
				audioSrc: '/es_robot.mp3'
			},
			{
				challengeId: '76631c3d-69a3-4b2e-ac3f-87dbe7b4b986',
				text: 'El Robot',
				correct: false,
				audioSrc: '/es_robot.mp3'
			},
			{
				challengeId: '76631c3d-69a3-4b2e-ac3f-87dbe7b4b986',
				text: 'El Robot',
				correct: false,
				audioSrc: '/es_robot.mp3'
			},
			{
				challengeId: '76631c3d-69a3-4b2e-ac3f-87dbe7b4b986',
				text: 'El Robot',
				correct: false,
				audioSrc: '/es_robot.mp3'
			},
			{
				challengeId: 'afdceb3d-3b9e-4d95-8b38-327631a7cb54',
				text: 'El Hombre',
				correct: false,
				imageSrc: '/man.svg',
				audioSrc: '/es_man.mp3'
			},
			{
				challengeId: 'afdceb3d-3b9e-4d95-8b38-327631a7cb54',
				text: 'La Muher',
				correct: false,
				imageSrc: '/woman.svg',
				audioSrc: '/es_woman.mp3'
			},
			{
				challengeId: 'afdceb3d-3b9e-4d95-8b38-327631a7cb54',
				text: 'El Robot',
				correct: true,
				imageSrc: '/robot.svg',
				audioSrc: '/es_robot.mp3'
			}
		])

		console.log('Seeding finished')
	} catch (error) {
		console.error(error)

		throw new Error('Failed to seed the database')
	}
}

main()
