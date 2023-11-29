import { Request, Response } from 'express';
import { Movie } from "../models";
import { IMovie } from '../interfaces';

export async function getMovies(req: Request, res: Response) {
  return res.status(200).json(await Movie.find({}));
}

export async function getMoviesByGenre({ params: { genreName } }: Request<{ genreName: String }>, res: Response) {
  return res.json(await Movie.find({ genre: genreName }));
}

export async function getMovieById({ params: { id } }: Request<{ id: String }>, res: Response) {
  return res.status(200).json(await Movie.findById(id));
}

export async function createMovie({ body }: Request<{}, {}, IMovie>, res: Response) {
  return res.status(201).json(await Movie.create(body));
}

export async function updateMovie({ params: { id }, body }: Request<{ id: String }, {}, IMovie>, res: Response) {
  return res.status(200).json(await Movie.findByIdAndUpdate(id, body, {
    returnOriginal: false
  }));
}

export async function deleteMovie({ params: { id } }: Request<{ id: String }>, res: Response) {
  return res.status(200).json(await Movie.findByIdAndDelete(id));
}