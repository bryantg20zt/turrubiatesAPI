import express from 'express';
import {pool} from '../database/conectionDB.js';

const app = express();

app.use(express.json());

app.get('/api/get', async (req, res) => {
    const [ResponseDB] = await pool.query('SELECT * FROM roster');
    res.json(ResponseDB);
});

app.post('/api/add' , async(req, res) => {
    const Data = req.body;
    const {userName, roleZT, id} = Data;
    const [ResponseDB] = await pool.query(`INSERT INTO roster (id, userName , roleZT) VALUES ('${id}', '${userName}', '${roleZT}')`);
    res.json(ResponseDB);
});

app.put('/api/update', async (req, res) => {
    const Data = req.body;
    const {id,userName,roleZT} = Data;
    const [ResponseDB] = await pool.query(`UPDATE roster SET userName = '${userName}', roleZT = '${roleZT}' WHERE id = '${id}'`);
    res.json(ResponseDB);
});

app.delete('/api/delete/:id', async (req, res) => {
    const {id} = req.params;
    const [ResponseDB] = await pool.query(`DELETE FROM roster WHERE id = ${id}`);
    res.json(ResponseDB);
});



app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});