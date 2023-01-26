// Para crear y configurar variables de entorno.
require ('dotenv').config();
// Exportar express para crear el webserver.
const express = require('express');
// Importar HBS para crear las vistas.
const hbs = require('hbs');

// Iniciar express
const app = express();
// Definir puerto y en caso de ni existir un puerto definido, utilizará el puerto 3000.
const port = process.env.PORT || 3000;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

// Manejar las rutas
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Gabriel Gamez',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Gabriel Gamez',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Gabriel Gamez',
        titulo: 'Curso de Node'
    });
});

// En caso de entrar en una ruta no específicada, rediríjira a un mensaje de error.
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

// Listen que muestra un mensaje en consola de que el servidor se está ejecutando y en qué puerto
app.listen(port, () => {
    console.log(`Aplicación de ejemplo escuchada en http://localhost:${port}`);
});