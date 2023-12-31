import { type Request, type Response } from 'express'
import { type IGenre } from '../interfaces'
import { Genre } from '../models'

export async function getGenres(req: Request, res: Response): Promise<Response> {
  return res.status(200).json(await Genre.find({}))
}

export async function getGenreById({ params: { id } }: Request<{ id: string }>, res: Response): Promise<Response> {
  return res.status(200).json(await Genre.findById(id))
}

export async function createGenre(req: Request<{}, {}, IGenre>, res: Response): Promise<Response> {
  return res.status(201).json(await Genre.create(req.body))
}

export async function updateGenre({ params: { id }, body }: Request<{ id: string }, {}, IGenre>, res: Response): Promise<Response> {
  return res.status(200).json(await Genre.findByIdAndUpdate(id, body, {
    returnOriginal: false
  }))
}

export async function deleteGenre({ params: { id } }: Request<{ id: string }>, res: Response): Promise<Response> {
  return res.status(200).json(await Genre.findByIdAndDelete(id))
}
