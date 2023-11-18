import { Schema, model } from 'mongoose';
import { IGenre } from '../interfaces';

const schema = new Schema<IGenre>({
  name: {
    type: String,
    required: true
  }
});

export default model<IGenre>('Genre', schema);