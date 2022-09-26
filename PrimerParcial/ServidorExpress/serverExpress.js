/* ==========================> DEPENDENCIAS */

const express = require('express');
const cors = require('cors');
var fs = require('fs');
var path = require('path');
var morgan = require('morgan');

/* ==========================> DEPENDENCIAS */

/* ==========================> SERVIDOR OBJ */

const app = express();

/* ==========================> SERVIDOR OBJ */

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

/* ==========================> CONFIGURACION SERVER */
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cors());
app.use(express.text());
app.use(express.json());

/* ==========================> CONFIGURACION SERVER */

/* Se utilizan los Middleware para hacer algo antes de que llegue el response */


app.use((req,res,next)=>{
    console.log('Primer Middleware');
    next();
},(req,res,next) => {
    console.log('Segundo Middleware');
    next();
})

/* Se utilizan los Middleware para hacer algo antes de que llegue el response */

/* =======================> ENDPOINTS */

app.get('/', (req , res) => res.sendFile('/static/index.html',{root: __dirname}));

app.get('/json', (req , res) => res.json({nombre: 'Bryan'}));

app.post('/textJson/:Data' , (req,res) => {
    const Data = req.params;
    res.send(Data);
})

app.post('/texto' , (req, res) => {
    const Data = req.body;
    res.json({req : Data});
})

app.post('/queryData' , (req, res) => {
    const Data = req.query;
    res.json({req : req.query});
})

app.post('/' , (req,res) => res.send('Peticion POST'));

/* =======================> ENDPOINTS */

/* =======================> ERROR 404 */

app.use((req,res) => {
    res.status(404).sendFile('./static/404.html', {root : __dirname});

})

/* =======================> ERROR 404 */

app.listen(8082, () => console.log(__dirname));