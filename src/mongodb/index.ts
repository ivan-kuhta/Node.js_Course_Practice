import { connect } from 'mongoose'

const uri = 'mongodb+srv://ivan_kuxta:ivan_kuxta@learnnodejs.nlxd0u0.mongodb.net/?retryWrites=true&w=majority'

export async function connection(): Promise<void> {
  await connect(uri).then(() => { console.log('The database is connected') }).catch(e => { console.error(e) })
}
