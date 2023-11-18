import {
  Router, Request, Response
} from "express";

import genre from './genre';
import movie from './movie';

const router = Router();


/**
 * @swagger
 * /health-check:
 *    get: 
 *      summary: Get server status
 *      tags:
 *        - connection
 *      description: Get a message that the server is running
 *      parametrs: none
 *      responses: 
 *        200: 
 *          description: OK
 *          content:
 *            application/json:
 *             schema: 
 *               type: string
 *               example: The server is running
 */
router.get('/health-check', (req: Request, res: Response) => {
  res.json('The server is running')
})

router.use('/movies', movie);
router.use('/genres', genre);

export default router;