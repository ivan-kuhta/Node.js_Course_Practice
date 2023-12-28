import {
  Router
} from 'express'
import { GenreController } from '../controllers'
import { GenreMiddlewares, validationId } from '../middlewares'
import { checkExistGenre } from '../middlewares/genre'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Document:
 *      type: object
 *      required:
 *        - _id
 *        - __v
 *      properties:
 *        _id:
 *          type: string
 *          description: The document ID.
 *          example: '654a4b7fc1a3b1b152a49674'
 *        __v:
 *          type: integer
 *          description: The version of the document
 *          example: 0
 *    Genre:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The genre's name.
 *           example: Genre's name
 * /genres:
 *    get:
 *      summary: Get a list of genres
 *      tags:
 *        - genre
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *             schema:
 *               type: array
 *               items:
 *                  allOf:
 *                    - $ref: '#/components/schemas/Genre'
 *                    - $ref: '#/components/schemas/Document'
 */
router.get('/', GenreController.getGenres)

/**
 * @swagger
 * /genres/{id}:
 *    get:
 *     summary: Get genre by ID
 *     tags:
 *        - genre
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the genre to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                allOf:
 *                  - $ref: '#/components/schemas/Genre'
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
router.get('/:id', validationId, checkExistGenre, GenreController.getGenreById)

/**
 * @swagger
 * /genres:
 *    post:
 *     summary: Create a genre
 *     tags:
 *        - genre
 *     requestBody:
 *        description: The body of the create request
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Genre'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                allOf:
 *                  - $ref: '#/components/schemas/Genre'
 *                  - $ref: '#/components/schemas/Document'
 *       400:
 *          description: Bad Request
 *          content:
 *            application/json:
 *              schema:
 *                type: string
 */
router.post('/', GenreMiddlewares.validationGenre, GenreController.createGenre)

/**
 * @swagger
 * /genres/{id}:
 *    put:
 *     summary: Update genre by ID
 *     tags:
 *        - genre
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the genre to update
 *         schema:
 *           type: string
 *     requestBody:
 *        description: The body of the update request
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Genre'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                allOf:
 *                  - $ref: '#/components/schemas/Genre'
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
router.put('/:id', validationId, GenreMiddlewares.checkExistGenre, GenreMiddlewares.validationGenre, GenreController.updateGenre)

/**
 * @swagger
 * /genres/{id}:
 *    delete:
 *     summary: Delete genre by ID
 *     tags:
 *        - genre
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the genre to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                allOf:
 *                  - $ref: '#/components/schemas/Genre'
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
router.delete('/:id', validationId, GenreMiddlewares.checkExistGenre, GenreController.deleteGenre)

export default router
