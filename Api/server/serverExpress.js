// ======================> Modulos Implementados <======================
import express from "express";
import cors from "cors";
import { router } from './routes.js';
// ======================> Creacion Express <======================
const app = express();

// ======================> Configuracion Express / CORS  <======================
app.use(cors({
  origin: 'http://127.0.0.1:5173'
}));
app.use(express.json());
app.use(router);


// ======================> Rutas NOT FOUND <======================
app.use((req, res) => {
  res.send('404');
});

// ======================> Inicializacion Express <======================
app.listen(3001, () => {
  console.log('Escuchando puerto 3001');
});