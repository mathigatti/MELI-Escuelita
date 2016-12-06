/**
 * Created by mgatti on 12/5/16.
 */



var express = require('express');
var app = express();

var mustacheExpress = require('mustache-express');
var request = require('request');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', './views/');

var articulos;

// Lista hardcodeada

articulos = [{"Id":1,"Nombre":"Abel","Apellido":"Lavalle","Categoria":"MEDIA","FechaNacimiento":"1937-12-18 00:00:00"},{"Id":2,"Nombre":"Ada","Apellido":"Cuentas","Categoria":"ALTA","FechaNacimiento":"1952-02-14 00:00:00"},{"Id":4,"Nombre":"Ambrosio","Apellido":"Chavez","Categoria":"BAJA","FechaNacimiento":"1938-07-26 00:00:00"},{"Id":6,"Nombre":"Ana","Apellido":"Celsi","Categoria":"MEDIA","FechaNacimiento":"1966-02-07 00:00:00"},{"Id":7,"Nombre":"Anastasio","Apellido":"Carrillo","Categoria":"BAJA","FechaNacimiento":"1979-07-14 00:00:00"},{"Id":8,"Nombre":"Andreína","Apellido":"Carrizo","Categoria":"ALTA","FechaNacimiento":"1989-10-27 00:00:00"},{"Id":9,"Nombre":"Andrés","Apellido":"Rodriguez","Categoria":"MEDIA","FechaNacimiento":"1927-04-19 00:00:00"},{"Id":10,"Nombre":"Ángel","Apellido":"Sorondo","Categoria":"BAJA","FechaNacimiento":"1918-12-10 00:00:00"},{"Id":11,"Nombre":"Ángela","Apellido":"Parrilli","Categoria":"ALTA","FechaNacimiento":"1959-02-24 00:00:00"},{"Id":12,"Nombre":"Jaume","Apellido":"Lisandro","Categoria":"MEDIA","FechaNacimiento":"1940-09-28 00:00:00"},{"Id":13,"Nombre":"Javier","Apellido":"Lavela","Categoria":"BAJA","FechaNacimiento":"1996-06-24 00:00:00"},{"Id":14,"Nombre":"Lorena","Apellido":"Lopez","Categoria":"BAJA","FechaNacimiento":"1998-08-17 00:00:00"},{"Id":15,"Nombre":"Lorenza","Apellido":"Elizondo","Categoria":"ALTA","FechaNacimiento":"1992-09-01 00:00:00"},{"Id":16,"Nombre":"Lorenzo","Apellido":"Elizalde","Categoria":"MEDIA","FechaNacimiento":"1949-11-05 00:00:00"},{"Id":17,"Nombre":"Loreta","Apellido":"Martín","Categoria":"BAJA","FechaNacimiento":"1927-06-06 00:00:00"},{"Id":18,"Nombre":"Mónica","Apellido":"Mnteagudo","Categoria":"ALTA","FechaNacimiento":"1983-12-20 00:00:00"},{"Id":19,"Nombre":"Montserrat","Apellido":"Lisandro","Categoria":"MEDIA","FechaNacimiento":"1987-05-01 00:00:00"},{"Id":20,"Nombre":"Nacho","Apellido":"Lavela","Categoria":"BAJA","FechaNacimiento":"1954-09-23 00:00:00"},{"Id":21,"Nombre":"Pedro Damián","Apellido":"Lavalle","Categoria":"MEDIA","FechaNacimiento":"1927-04-30 00:00:00"},{"Id":22,"Nombre":"Pedro Damián","Apellido":"Mendizabal","Categoria":"BAJA","FechaNacimiento":"1922-06-05 00:00:00"},{"Id":23,"Nombre":"Pedro","Apellido":"Cuentas","Categoria":"ALTA","FechaNacimiento":"1931-10-20 00:00:00"},{"Id":24,"Nombre":"Pedro","Apellido":"Solari","Categoria":"MEDIA","FechaNacimiento":"1988-11-17 00:00:00"},{"Id":25,"Nombre":"Quique","Apellido":"Montreal","Categoria":"ALTA","FechaNacimiento":"2007-11-03 00:00:00"},{"Id":26,"Nombre":"Rafael","Apellido":"Castro","Categoria":"MEDIA","FechaNacimiento":"2006-02-14 00:00:00"},{"Id":27,"Nombre":"Rafaelo","Apellido":"Gutierrez","Categoria":"BAJA","FechaNacimiento":"1944-07-13 00:00:00"},{"Id":28,"Nombre":"Raimundo","Apellido":"Del carril","Categoria":"ALTA","FechaNacimiento":"2005-05-21 00:00:00"},{"Id":29,"Nombre":"Ramón","Apellido":"Ascari","Categoria":"MEDIA","FechaNacimiento":"1920-01-16 00:00:00"},{"Id":30,"Nombre":"Raquel","Apellido":"Traverso","Categoria":"BAJA","FechaNacimiento":"1959-03-21 00:00:00"},{"Id":31,"Nombre":"Raúl","Apellido":"Elizondo","Categoria":"ALTA","FechaNacimiento":"1951-07-13 00:00:00"},{"Id":32,"Nombre":"Virginia","Apellido":"Casares","Categoria":"ALTA","FechaNacimiento":"1941-03-04 00:00:00"},{"Id":33,"Nombre":"Visitación","Apellido":"Velez","Categoria":"MEDIA","FechaNacimiento":"1925-07-30 00:00:00"},{"Id":34,"Nombre":"Vittorio","Apellido":"Montreal","Categoria":"BAJA","FechaNacimiento":"1918-03-29 00:00:00"},{"Id":35,"Nombre":"Viviana","Apellido":"Castro","Categoria":"ALTA","FechaNacimiento":"1997-04-16 00:00:00"},{"Id":36,"Nombre":"Walter","Apellido":"Ascari","Categoria":"ALTA","FechaNacimiento":"1989-05-05 00:00:00"},{"Id":37,"Nombre":"William","Apellido":"Gonzalez","Categoria":"ALTA","FechaNacimiento":"1989-05-05 00:00:00"},{"Id":38,"Nombre":"Juan","Apellido":"Perez","Categoria":"ALTA","FechaNacimiento":"1977-01-22 00:00:00"},{"Id":39,"Nombre":"Juan","Apellido":"Perez","Categoria":"ALTA","FechaNacimiento":"1977-01-22 00:00:00"},{"Id":40,"Nombre":"Juan","Apellido":"Perez","Categoria":"ALTA","FechaNacimiento":"1977-01-22 00:00:00"},{"Id":41,"Nombre":"Juan","Apellido":"Perez","Categoria":"ALTA","FechaNacimiento":"1977-01-22 00:00:00"},{"Id":42,"Nombre":"Juan","Apellido":"Perez","Categoria":"ALTA","FechaNacimiento":"1977-01-22 00:00:00"}];


function buscarIndex(id){
    for(var i = 0; i < articulos.length; i++) {
        if(articulos[i].Id == id){
            return i;
        }
    }
    return -1;
}


function buscar(id){
    for(var i = 0; i < articulos.length; i++) {
        if(articulos[i].Id == id){
            return articulos[i];
        }
    }
    return {};
}

/*
request.get('http://localhost:8080/json', function (error,response,body){
    if (!error && response.statusCode === 200){
        articulos = JSON.parse(body);
    }
});
*/

app.get('/posts', function (req, res) {
    res.render("test",{'titulo': 'La Lista Completa de Clientes', 'articulos': articulos});
});

app.get('/posts/new', function (req, res) {
    if (articulos.length == 0) {
        res.render("test", {'titulo': 'No Hay Clientes actualmente :(', 'articulos':[{'Id':'---', 'Nombre':'---', 'Apellido':'---', 'Categoria':'---', 'FechaNacimiento':'---'}]});
    }
    else{
        res.render("test", {'titulo': 'El Ultimo Cliente', 'articulos':[{'Id':articulos[articulos.length-1].Id, 'Nombre':articulos[articulos.length-1].Nombre, 'Apellido':articulos[articulos.length-1].Apellido, 'Categoria':articulos[articulos.length-1].Categoria, 'FechaNacimiento':articulos[articulos.length-1].FechaNacimiento}]});
    }
});

app.get('/posts/:id', function (req, res) {
    if (buscarIndex(req.params.id) == -1) {
        res.render("test", {'titulo': 'El cliente buscado no fue encontrado :(', 'articulos':[{'Id':'---', 'Nombre':'---', 'Apellido':'---', 'Categoria':'---', 'FechaNacimiento':'---'}]});
    }
    else{
        res.render("test", {'titulo': 'Los Datos del Cliente Pedido', 'articulos':[{'Id':buscar(req.params.id).Id, 'Nombre':buscar(req.params.id).Nombre, 'Apellido':buscar(req.params.id).Apellido, 'Categoria':buscar(req.params.id).Categoria, 'FechaNacimiento':buscar(req.params.id).FechaNacimiento}]});
    }
});

var bodyParser = require('body-parser');
app.use(bodyParser());

app.post('/posts', function(req, res) {
    dictCliente = req.body;
    indice = articulos.length;
    dictCliente['Id'] = indice;
    articulos.push(dictCliente);
    ultimo = dictCliente.Id;
    console.log('Agregado el id:', dictCliente.Id, '\nCon body: ', dictCliente);
    res.send('Agregado el id: ' + dictCliente.Id);
});

app.del('/posts/:id', function (req, res) {
    if(buscarIndex(req.params.id) != -1) {
        articulos.splice(index, 1);
    }
    console.log('Eliminado: ', req.params.id);
    res.send('Eliminado el id: ' + req.params.id);
});

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});
