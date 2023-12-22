import express, { Express } from 'express';

import { HOST, PORT } from './constants';
import router from './routes';
import swagger from './swagger';

const app: Express = express();

app.use(swagger);

app.use(router)

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})