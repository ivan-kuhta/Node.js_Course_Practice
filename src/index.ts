import express, { type Express } from 'express'
import { config } from 'dotenv'

import router from './routes'
import swagger from './swagger'

if (process.env.NODE_ENV !== 'production') {
  config()
}

const app: Express = express()

app.use(swagger)

app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`)
})
