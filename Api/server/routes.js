import express from 'express';
import { Await } from 'react-router-dom';
export const router  = express.Router();
import { pool } from './conecctionDB.js';

router.get('/api/teams', async (req, res) => {
    const [ResponseDB] = await pool.query('SELECT * FROM teams');
    res.json(ResponseDB).status(200);
  });

router.get('/api/drivers', async (req, res) => {
    const [ResponseDB] = await pool.query('SELECT * FROM drivers');
    res.json(ResponseDB).status(200);
  });

router.get('/api/drivers/:driverName',async (req, res) => {
    const DriverName = req.params.driverName;
    const [responseDB] = await pool.query(`SELECT * FROM drivers WHERE nameDriver LIKE '%${DriverName}%' OR lastnameDriver LIKE '%${DriverName}%'`);
    res.json(responseDB).status(200);
});

router.post('/api/drivers', async (req, res) => {
    const driver = req.body;
    const { name, lastName,nacionality,number,championship,wins,podiums,driverPhoto,helmetPhoto,gradientColor } = driver;
    const [ResponseDB] = await pool.query(`INSERT INTO drivers (nameDriver, lastNameDriver,countryDriver,numberDriver,worldChampionships,winsDriver,podiumsDriver,driverImage,helmetImage,gradientColor) VALUES ('${name}','${lastName}','${nacionality}',${number},${championship},${wins},${podiums},'${driverPhoto}','${helmetPhoto}','${gradientColor}')`);
    res.json(ResponseDB).status(200);
});

router.patch('/api/drivers',async (req,res) => {
  const driverChanged = req.body;
  const {id,nameDriver,lastNameDriver,countryDriver,numberDriver,worldChampionships,winsDriver,podiumsDriver,driverImage,helmetImage,gradientColor} = driverChanged;
  const [ResponseDB] = await pool.query(`UPDATE drivers SET nameDriver = '${nameDriver}', lastNameDriver = '${lastNameDriver}', countryDriver = '${countryDriver}', numberDriver = ${numberDriver}, worldChampionships = ${worldChampionships}, winsDriver = ${winsDriver}, podiumsDriver = ${podiumsDriver}, driverImage = '${driverImage}', helmetImage = '${helmetImage}', gradientColor = '${gradientColor}' WHERE id = ${id}`);
  res.json(ResponseDB).status(200);
});

router.delete('/api/drivers/:id',async (req,res) => {
  const id = req.params.id;
  const [ResponseDB] = await pool.query(`DELETE FROM drivers WHERE id = ${id}`);
  res.json(ResponseDB).status(200);
});