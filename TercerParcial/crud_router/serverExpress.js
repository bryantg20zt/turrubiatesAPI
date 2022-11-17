/* ==========================> DEPENDENCIAS */

import express from 'express';
import cors from 'cors';
import { router } from './routes.js';


/* ==========================> DEPENDENCIAS */

/* ==========================> SERVIDOR OBJ */

const app = express();


/* ==========================> CONFIGURACION SERVER */
app.use(cors());
app.use(express.text());
app.use(express.json());
app.use(router);

/* ==========================> CONFIGURACION SERVER */

  // define the home page route
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

/* Se utilizan los Middleware para hacer algo antes de que llegue el response */


app.use((req,res,next)=>{
    console.log('Primer Middleware');
    next();
},(req,res,next) => {
    console.log('Segundo Middleware');
    next();
})

app.use((req,res) => {
    res.status(404).sendFile('./static/404.html', {root : __dirname});
})

/* =======================> ERROR 404 */

app.listen(8082, () => console.log('Escuchanding...'));