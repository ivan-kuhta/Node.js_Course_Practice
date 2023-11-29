import { type NextFunction, type Request, type Response } from 'express'
import { isObjectIdOrHexString } from 'mongoose'

export * as MovieMiddlewares from './movie'
export * as GenreMiddlewares from './genre'

export function validationId(req: Request<{ id: string }>, res: Response, next: NextFunction): Response | undefined {
  const { id } = req.params

  if (!isObjectIdOrHexString(id)) return res.status(400).json('Invalid ID')

  next()
}
