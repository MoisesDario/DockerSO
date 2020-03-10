const express = require('express');
const app = express();
const path = require('path');

app.set('port',3000); //Obteniendo esta variable como configuracion
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')//Motor de plantilla

//routes
app.get('/',(req,res) => {
    //res.sendFile(path.join(__dirname,'views/index.htm'));
    res.render('index', {title: 'Firts Website'});
    //console.log(__dirname + '/views/index.htm');
    //console.log(path.join(__dirname,'views/index.htm'))
});

//static files


app.listen(app.get('port'),() => {
    console.log('Server on port',3000);
}); //Servidor Para desarrollo
