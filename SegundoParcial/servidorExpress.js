import express from 'express';
import { pool } from './database/conectionDB.js';
import converter from 'json2xls';
import filesystem from 'fs';


const app = express();

app.get('/rosterzt', async (req, res) => {
    const [responseDB] = await pool.query('SELECT * FROM roster');
    res.json(responseDB);
});

app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});