import { NextFunction, Request, Response } from "express";
import { Movie } from "../models";
import { IMovie } from "../interfaces";

export async function validationMovie({ body }: Request<{}, {}, IMovie>, res: Response, next: NextFunction) {
  const validation = new Movie(body).validateSync();

  if (validation) return res.status(400).json(validation.message);

  return next();
}

export async function checkExistMovie({ params: { id } }: Request<{ id: String }>, res: Response, next: NextFunction) {
  const movie = await Movie.exists({ _id: id });

  if (!movie) return res.status(404).json('Not found')

  return next();
}