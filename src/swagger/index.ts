import { Router } from 'express'
import { join } from 'path'

import swaggerJSDoc, { type Options, type SwaggerDefinition } from 'swagger-jsdoc'
import { serve, setup } from 'swagger-ui-express'

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0'
  }
}

const options: Options = {
  swaggerDefinition,
  apis: [join(__dirname, '../routes/*.ts')]
}

const swagger = Router()

swagger.use('/docs', serve, setup(swaggerJSDoc(options)))

export default swagger
