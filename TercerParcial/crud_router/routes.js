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

  router.get('/rosterzt', async (req,res) => {
     const responseDB = pool.query('SELECT * FROM roster');
     res.json(responseDB);
  })
