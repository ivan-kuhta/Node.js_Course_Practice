import { type NextFunction, type Request, type Response } from 'express'
import { Genre } from '../models'
import { type IGenre } from '../interfaces'

export function validationGenre({ body }: Request<{}, {}, IGenre>, res: Response, next: NextFunction): Response | undefined {
  const validation = new Genre(body).validateSync()

  if (validation !== null) return res.status(400).json(validation.message)

  next()
}

export async function checkExistGenre({ params: { id } }: Request<{ id: string }>, res: Response, next: NextFunction): Promise<Response | undefined> {
  const genre = await Genre.exists({ _id: id })

  if (genre === null) return res.status(404).json('Not found')

  next()
}
