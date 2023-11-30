import { config } from 'dotenv'
import { connect } from 'mongoose'

if (process.env.NODE_ENV !== 'production') {
  config()
}

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@learnnodejs.nlxd0u0.mongodb.net/?retryWrites=true&w=majority`

export async function connection(): Promise<void> {
  await connect(uri).then(() => { console.log('The database is connected') }).catch(e => { console.error(e) })
}
