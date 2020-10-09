const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000;

//EXPRESS HBS ENGINE
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs',{
        nombre: "Stefan",
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        
    });
});

app.get('/data', (req, res) => {
    let salida = {
        nombre: "Stefan",
        edad: 32,
        url: req.url
    }

    res.send(salida);
});
 
app.listen(port, () =>{
 console.log(`escuchando en el puerto ${port}`);
});