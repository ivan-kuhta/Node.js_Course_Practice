import {
  Router, Request, Response
} from "express";

const router = Router();

/**
 * @swagger
 * /health-check:
 *    get: 
 *      summary: Get server status
 *      description: Get a message that the server is running
 *      parametrs: none
 *      responses: 
 *        200: 
 *          description: Get a message
 *          content:
 *            application/json:
 *             schema: 
 *               type: string
 *               example: The server is running
 */
router.get('/health-check', (req: Request, res: Response) => {
  res.json('The server is running')
})

export default router;