import { describe } from '@jest/globals'
import request, { type Response } from 'supertest'
import { correctGenre, inccorectID, incorrectGenre, notFoundID, updateGenre } from '../utils/data/genre.test.data'
import app from '..'

let genreId: string = ''

describe('GET /genres', () => {
  it('should return all genres', async () => {
    return await request(app)
      .get('/genres')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})

describe('POST /genres', () => {
  test('should return Bad Request', async () => {
    return await request(app)
      .post('/genres')
      .send(incorrectGenre)
      .expect('Content-Type', /json/)
      .expect(400)
  })

  test('should add a new genre', async () => {
    await request(app)
      .post('/genres')
      .send(correctGenre)
      .expect('Content-Type', /json/)
      .expect(201)
      .then(({ body }: Response) => {
        genreId = body._id
      })
  })
})

describe('GET /genres/:id', () => {
  it('should return Bad Request', async () => {
    return await request(app)
      .get(`/genres/${inccorectID}`)
      .expect('Content-Type', /json/)
      .expect(400)
  })

  it('should return Not Found', async () => {
    return await request(app)
      .get(`/genres/${notFoundID}`)
      .expect('Content-Type', /json/)
      .expect(404)
  })

  it('should return the genre by id', async () => {
    return await request(app)
      .get(`/genres/${genreId}`)
      .expect('Content-Type', /json/)
      .expect(200)
  })
})

describe('PUT /genres/:id', () => {
  it('should return Bad Request with incorrect ID', async () => {
    return await request(app)
      .put(`/genres/${inccorectID}`)
      .send(updateGenre)
      .expect('Content-Type', /json/)
      .expect(400)
  })

  it('should return Bad Request with incorrect data', async () => {
    return await request(app)
      .put(`/genres/${genreId}`)
      .send(incorrectGenre)
      .expect('Content-Type', /json/)
      .expect(400)
  })

  it('should return Not Found', async () => {
    return await request(app)
      .get(`/genres/${notFoundID}`)
      .send(updateGenre)
      .expect('Content-Type', /json/)
      .expect(404)
  })

  it('should update the genre', async () => {
    return await request(app)
      .put(`/genres/${genreId}`)
      .send(updateGenre)
      .expect(200)
  })
})

describe('DELETE /genres/:id', () => {
  it('should return Bad Request with incorrect ID', async () => {
    return await request(app)
      .delete(`/genres/${inccorectID}`)
      .expect('Content-Type', /json/)
      .expect(400)
  })

  it('should return Not Found', async () => {
    return await request(app)
      .delete(`/genres/${notFoundID}`)
      .expect('Content-Type', /json/)
      .expect(404)
  })

  it('should delete the genre', async () => {
    return await request(app)
      .delete(`/genres/${genreId}`)
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
