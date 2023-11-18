import { Request, Response } from 'express';
import { Movie } from "../models";
import { IMovie } from '../interfaces';
import { isObjectIdOrHexString } from 'mongoose';

export async function getMovies(req: Request, res: Response) {
  return res.status(200).json(await Movie.find({}));
}

export async function getMoviesByGenre(req: Request<{ genreName: String }>, res: Response) {
  const { genreName } = req.params;

  return res.status(200).json(await Movie.find({ genre: genreName }));
}

export async function getMovieById(req: Request<{ id: String }>, res: Response) {
  const { id } = req.params;

  if (!isObjectIdOrHexString(id)) return res.status(400).json('Invalid ID');

  const movie = await Movie.findById(id);

  if (!movie) return res.status(404).json('Not found')

  return res.status(200).json(movie);
}

export async function createMovie(req: Request<{}, {}, IMovie>, res: Response) {
  const movie = new Movie(req.body);

  const validation = movie.validateSync();

  if (validation) return res.status(400).json(validation.message);

  return res.status(201).json(await movie.save());
}

export async function updateMovie(req: Request<{ id: String }, {}, IMovie>, res: Response) {
  const { id } = req.params;

  if (!isObjectIdOrHexString(id)) return res.status(400).json('Invalid ID');

  const validation = new Movie(req.body).validateSync();

  if (validation) return res.status(400).json(validation.message);

  const doc = await Movie.findByIdAndUpdate(id, req.body, {
    returnOriginal: false
  });

  if (!doc) return res.status(404).json('Not found');

  return res.status(200).json(doc);
}

export async function deleteMovie(req: Request<{ id: String }>, res: Response) {
  const { id } = req.params;

  if (!isObjectIdOrHexString(id)) return res.status(400).json('Invalid ID');

  const doc = await Movie.findByIdAndDelete(id);

  if (!doc) return res.status(404).json('Not found');

  return res.status(200).json(doc);
}