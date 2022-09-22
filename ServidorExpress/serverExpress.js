const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.text());
app.use(express.json());

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

app.use((req,res) => {
    res.status(404).sendFile('./static/404.html', {root : __dirname});

})

app.listen(8082, () => console.log(__dirname));