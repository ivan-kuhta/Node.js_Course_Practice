const Router = require('express');
const router = new Router();

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
router.get('/health-check', (req, res) => {
  res.json('The server is running')
})

module.exports = router;