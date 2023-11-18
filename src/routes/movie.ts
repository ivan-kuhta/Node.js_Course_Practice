import {
  Router
} from "express";
import { MovieController } from "../controllers";

const router = Router();


/**
 * @swagger
 * components:
 *  schemas:
 *    Movie:
 *        type: object
 *        required:
 *          - name
 *          - description
 *          - releaseDate
 *          - genre
 *        properties:
 *          name:
 *            type: string
 *            description: Movie's name.
 *            example: Movie's name
 *          description:
 *            type: string
 *            description: Movie's description.
 *            example: Movie's description
 *          releaseDate:
 *            type: string
 *            format: date-time
 *            description: Movie's release date.
 *            example: 2023-11-06T15:55:55.860+00:00
 *          genre:
 *            type: array
 *            description: Movie's genres.
 *            example: ['Genre 1', 'Genre 2', 'Genre 3']
 *            items:
 *              type: string
 * /movies:
 *    get: 
 *      summary: Get a list of movies
 *      tags:
 *        - movie
 *      responses: 
 *        200: 
 *          description: OK
 *          content:
 *            application/json:
 *             schema: 
 *               type: array
 *               items:
 *                  allOf:
 *                    - $ref: '#/components/schemas/Movie'
 *                    - $ref: '#/components/schemas/Document'
 */
router.get('/', MovieController.getMovies);

/**
 * @swagger
 * /movies/genre/{genreName}:
 *    get:
 *     summary: Get movies by genre
 *     tags:
 *        - movie
 *     parameters:
 *       - in: path
 *         name: genreName
 *         required: true
 *         description: The name of the genre to movies
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *            schema: 
 *              type: array
 *              items:
 *                 allOf:
 *                   - $ref: '#/components/schemas/Movie'
 *                   - $ref: '#/components/schemas/Document'
 */
router.get('/genre/:genreName', MovieController.getMoviesByGenre);

/**
 * @swagger
 * /movies/{id}:
 *    get:
 *     summary: Get movie by ID
 *     tags:
 *        - movie
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the movie to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                allOf:
 *                  - $ref: '#/components/schemas/Movie'
 *                  - $ref: '#/components/schemas/Document'
 *       400:
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *       404:
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Not Found
 */
router.get('/:id', MovieController.getMovieById);

/**
 * @swagger
 * /movies:
 *    post:
 *     summary: Create a movie
 *     tags:
 *        - movie
 *     requestBody:
 *        description: The body of the create request
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movie'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                allOf:
 *                  - $ref: '#/components/schemas/Movie'
 *                  - $ref: '#/components/schemas/Document'
 *       400:
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 */
router.post('/', MovieController.createMovie);


/**
 * @swagger
 * /movies/{id}:
 *    put:
 *     summary: Update movie by ID
 *     tags:
 *        - movie
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the movie to update
 *         schema:
 *           type: string
 *     requestBody:
 *        description: The body of the update request
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                allOf:
 *                  - $ref: '#/components/schemas/Movie'
 *                  - $ref: '#/components/schemas/Document'
 *       400:
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *       404:
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Not Found
 */
router.put('/:id', MovieController.updateMovie);


/**
 * @swagger
 * /movies/{id}:
 *    delete:
 *     summary: Delete movie by ID
 *     tags:
 *        - movie
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the movie to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                allOf:
 *                  - $ref: '#/components/schemas/Movie'
 *                  - $ref: '#/components/schemas/Document'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *       404:
 *          description: Not Found
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 *                example: Not Found
 */
router.delete('/:id', MovieController.deleteMovie);

export default router;