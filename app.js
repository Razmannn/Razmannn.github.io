const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

var namesdependejos_test = []

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para el Hello World
app.get('/pug', (req, res) => {
    res.render('index', { title: 'Hello World', message: 'Hello  pendejito World!' });
});

app.post('/pug', (req, res) => {
  namesdependejos_test.push(req.body.name)
  res.render('index', { title: req.body.name, message: "estos son todos los pendejitoooos::::::" + JSON.stringify(namesdependejos_test) });
});
app.post('/piruliru', (req, res) => {
  console.log(req.params)
  namesdependejos_test.push(req.body.name)
  res.render('index', { title: req.body.name, message: "estos son todos los pendejitoooos::::::" + JSON.stringify(namesdependejos_test) });
});

app.get('/pug/:id', (req, res) => {
  res.render('index', { title: req.params.id, message: 'Hello  pendejito World!' });
});

app.get('/', (req, res) => {
  console.log(req.query.hola)
  var textopara = req.query.hola
  res.send('Hello World!' + textopara);
});

app.get('/nfs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nfs.html'));
});
  
app.get('/wasa', (req, res) => {
  res.render('wasa', { wasos: JSON.stringify(namesdependejos_test) });
});

app.post('/wasa', (req, res) => {
  namesdependejos_test.push(req.body.name)
  res.render('wasa', { wasos: JSON.stringify(namesdependejos_test) });
});


app.post('/deletewasa', (req, res) => {
  namesdependejos_test = []
  res.render('wasa', { wasos: JSON.stringify(namesdependejos_test) });
});


app.get('/Slender%20shadow', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Slender Shadow.html'));
});
app.get('/Cs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Cs-1.6.html'));
});
app.get('/error404', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'error404.html'));
});
app.get('/Requisitos', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Requisitos-cs.html'));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
