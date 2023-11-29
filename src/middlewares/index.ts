import { NextFunction, Request, Response } from 'express';
import { isObjectIdOrHexString } from 'mongoose';

export * as MovieMiddlewares from './movie';
export * as GenreMiddlewares from './genre';

export function validationId(req: Request<{ id: String }>, res: Response, next: NextFunction) {
  const { id } = req.params;

  if (!isObjectIdOrHexString(id)) return res.status(400).json('Invalid ID');

  return next();
}