import express, { Express } from 'express';

import router from './routes';
import swagger from './swagger';

const app: Express = express();

const hostname: string = '127.0.0.1';
const port: number = 3000;

app.use(swagger);

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on http://${hostname}:${port}`)
})