import type { NextFunction, Request, Response } from 'express'
import { Movie } from '../models'
import type { IMovie } from '../interfaces'

export async function validationMovie({ body }: Request<{}, {}, IMovie>, res: Response, next: NextFunction): Promise<Response | undefined> {
  const validation = new Movie(body).validateSync()

  if (validation !== null) return res.status(400).json(validation.message)

  next()
}

export async function checkExistMovie({ params: { id } }: Request<{ id: string }>, res: Response, next: NextFunction): Promise<Response | undefined> {
  const movie = await Movie.exists({ _id: id })

  if (movie === null) return res.status(404).json('Not found')

  next()
}
