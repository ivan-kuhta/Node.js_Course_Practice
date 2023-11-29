import { type Request, type Response } from 'express'
import { Movie } from '../models'
import { type IMovie } from '../interfaces'

export async function getMovies(req: Request, res: Response): Promise<Response> {
  return res.status(200).json(await Movie.find({}))
}

export async function getMoviesByGenre({ params: { genreName } }: Request<{ genreName: string }>, res: Response): Promise<Response> {
  return res.status(200).json(await Movie.find({ genre: genreName }))
}

export async function getMovieById({ params: { id } }: Request<{ id: string }>, res: Response): Promise<Response> {
  return res.status(200).json(await Movie.findById(id))
}

export async function createMovie({ body }: Request<{}, {}, IMovie>, res: Response): Promise<Response> {
  return res.status(201).json(await Movie.create(body))
}

export async function updateMovie({ params: { id }, body }: Request<{ id: string }, {}, IMovie>, res: Response): Promise<Response> {
  return res.status(200).json(await Movie.findByIdAndUpdate(id, body, {
    returnOriginal: false
  }))
}

export async function deleteMovie({ params: { id } }: Request<{ id: string }>, res: Response): Promise<Response> {
  return res.status(200).json(await Movie.findByIdAndDelete(id))
}
