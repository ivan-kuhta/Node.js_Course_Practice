const express = require('express');

const router = require('./routes');

const swagger = require('./swagger');

const app = express();
const port = 3000;

app.use(swagger);

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on http://www.localhost:${port}`)
})