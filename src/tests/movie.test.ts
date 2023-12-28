import { describe } from '@jest/globals'
import request, { type Response } from 'supertest'
import { correctMovie, genreName, inccorectID, incorrectMovie, notFoundID, updateMovie } from '../utils/data/movie.test.data'
import app from '..'

let movieId: string = ''

describe('GET /movies', () => {
  it('should return all movies', async () => {
    return await request(app)
      .get('/movies')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})

describe('GET /movies/genre/:genreName', () => {
  it('should return all movies', async () => {
    return await request(app)
      .get(`/movies/genre/${genreName}`)
      .expect('Content-Type', /json/)
      .expect(200)
  })
})

describe('POST /movies', () => {
  test('should return Bad Request', async () => {
    return await request(app)
      .post('/movies')
      .send(incorrectMovie)
      .expect('Content-Type', /json/)
      .expect(400)
  })

  test('should add a new movie', async () => {
    await request(app)
      .post('/movies')
      .send(correctMovie)
      .expect('Content-Type', /json/)
      .expect(201)
      .then(({ body }: Response) => {
        movieId = body._id
      })
  })
})

describe('GET /movies/:id', () => {
  it('should return Bad Request', async () => {
    return await request(app)
      .get(`/movies/${inccorectID}`)
      .expect('Content-Type', /json/)
      .expect(400)
  })

  it('should return Not Found', async () => {
    return await request(app)
      .get(`/movies/${notFoundID}`)
      .expect('Content-Type', /json/)
      .expect(404)
  })

  it('should return the movie by id', async () => {
    return await request(app)
      .get(`/movies/${movieId}`)
      .expect('Content-Type', /json/)
      .expect(200)
  })
})

describe('PUT /movies/:id', () => {
  it('should return Bad Request with incorrect ID', async () => {
    return await request(app)
      .put(`/movies/${inccorectID}`)
      .send(updateMovie)
      .expect('Content-Type', /json/)
      .expect(400)
  })

  it('should return Bad Request with incorrect data', async () => {
    return await request(app)
      .put(`/movies/${movieId}`)
      .send(incorrectMovie)
      .expect('Content-Type', /json/)
      .expect(400)
  })

  it('should return Not Found', async () => {
    return await request(app)
      .get(`/movies/${notFoundID}`)
      .send(updateMovie)
      .expect('Content-Type', /json/)
      .expect(404)
  })

  it('should update the movie', async () => {
    return await request(app)
      .put(`/movies/${movieId}`)
      .send(updateMovie)
      .expect(200)
  })
})

describe('DELETE /movies/:id', () => {
  it('should return Bad Request with incorrect ID', async () => {
    return await request(app)
      .delete(`/movies/${inccorectID}`)
      .expect('Content-Type', /json/)
      .expect(400)
  })

  it('should return Not Found', async () => {
    return await request(app)
      .delete(`/movies/${notFoundID}`)
      .expect('Content-Type', /json/)
      .expect(404)
  })

  it('should delete the movie', async () => {
    return await request(app)
      .delete(`/movies/${movieId}`)
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
