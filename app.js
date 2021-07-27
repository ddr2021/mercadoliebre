//EXPRESS
const express=require('express');
const app=express();

//SERVIDOR
const port = 7070;
app.listen(port, ()=>{console.log(`Servidor activo en http://www.localhost:${port}`)});

//RUTAS ESTATICAS PARA LINKEAR ARCHIVOS DEL PROYECTO
app.use(express.static('public'));
app.use(express.static('views'));

//PETICIONES Y RESPUESTAS AL SERVIDOR
const path= require('path');
app.get('/', (req, res)=>{res.sendFile(path.resolve(__dirname, 'views', 'home.html' ))});


