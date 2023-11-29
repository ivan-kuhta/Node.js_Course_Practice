import express, { type Express } from 'express'

import router from './routes'
import swagger from './swagger'
import { connection } from './mongodb'

const app: Express = express()

const hostname: string = '127.0.0.1'
const port: number = 3000

app.use(express.json())

app.use(swagger)

app.use(router)

app.listen(port, async () => {
  await connection()
  console.log(`Server is running on http://${hostname}:${port}`)
})
