import { NextFunction, Request, Response } from "express";
import { Genre } from "../models";
import { IGenre } from "../interfaces";

export function validationGenre({ body }: Request<{}, {}, IGenre>, res: Response, next: NextFunction) {
  const validation = new Genre(body).validateSync();

  if (validation) return res.status(400).json(validation.message);

  return next();
}

export async function checkExistGenre({ params: { id } }: Request<{ id: String }>, res: Response, next: NextFunction) {
  const genre = await Genre.exists({ _id: id });

  if (!genre) return res.status(404).json('Not found')

  return next();
}