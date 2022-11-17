import express from "express";
export const router = express.Router();

router.all('/', (req, res) => {
    res.send('Hola');
  });
  // define the about route
  router.get('/about', (req, res) => {
    res.send('Peticion GET a About');
  });
  router.post('/Users', (req,res) => {
    res.send('Peticion POST a Usuarios');
  })

  /**
   * @swagger
   * /rosterzt:
   *    get:
   *      description: Ruta para obtener la informacion del Roster
   *      responses:
   *        200:
   *          description: Regresa la data de DB
   */
  router.get('/rosterzt', async (req,res) => {
     const responseDB = pool.query('SELECT * FROM roster');
     res.json(responseDB);
  })
