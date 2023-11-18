import { Schema, model } from 'mongoose';
import { IMovie } from '../interfaces';

const schema = new Schema<IMovie>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  genre: {
    type: [String],
    required: true
  }
});

export default model<IMovie>('Movie', schema);