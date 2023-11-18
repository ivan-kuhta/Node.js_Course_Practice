import { Request, Response } from 'express';
import { IGenre } from "../interfaces";
import { Genre } from "../models";
import { isObjectIdOrHexString } from 'mongoose';

export async function getGenres(req: Request, res: Response) {
  return res.status(200).json(await Genre.find({}));
}

export async function getGenreById(req: Request<{ id: String }>, res: Response) {
  const { id } = req.params;

  if (!isObjectIdOrHexString(id)) return res.status(400).json('Invalid ID');

  const genre = await Genre.findById(id);

  if (!genre) return res.status(404).json('Not found')

  return res.status(200).json(genre);
}

export async function createGenre(req: Request<{}, {}, IGenre>, res: Response) {
  const genre = new Genre(req.body);

  const validation = genre.validateSync();

  if (validation) return res.status(400).json(validation.message);

  return res.status(201).json(await genre.save());
}

export async function updateGenre(req: Request<{ id: String }, {}, IGenre>, res: Response) {
  const { id } = req.params;

  if (!isObjectIdOrHexString(id)) return res.status(400).json('Invalid ID');

  const validation = new Genre(req.body).validateSync();

  if (validation) return res.status(400).json(validation.message);

  const doc = await Genre.findByIdAndUpdate(id, req.body, {
    returnOriginal: false,
  });

  if (!doc) return res.status(404).json('Not found');

  return res.status(200).json(doc);
}

export async function deleteGenre(req: Request<{ id: String }>, res: Response) {
  const { id } = req.params;

  if (!isObjectIdOrHexString(id)) return res.status(400).json('Invalid ID');

  const doc = await Genre.findByIdAndDelete(id);

  if (!doc) return res.status(404).json('Not found');

  return res.status(200).json(doc);
}