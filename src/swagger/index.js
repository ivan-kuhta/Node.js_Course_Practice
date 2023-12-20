const path = require('path');

const Router = require('express');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, '../routes/*.js')],
};

const swagger = Router();

swagger.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

module.exports = swagger;