import { type IMovie } from '../../interfaces'

export const correctMovie: IMovie = {
  name: 'New Movie',
  description: 'Description',
  releaseDate: new Date(),
  genre: [
    'Genre 1'
  ]
}

export const updateMovie: IMovie = {
  name: 'New Movie update',
  description: 'Description update',
  releaseDate: new Date(),
  genre: [
    'Genre 2'
  ]
}

export const incorrectMovie = {
  other_props: 'New Movie'
}

export const genreName = 'Genre 1'

export const inccorectID = 'asfas'

export const notFoundID = '555a4b7fc1a3b1b152a49674'
