/**
 * Created by mgatti on 11/29/16.
 */

var samePage = true;

function ManejadorDeArticulos (articulos) {
    this.articulos = articulos;
    this.load = function() {
        return this.articulos;
    };
    this.render = function() {
        var link = "noticia1.html";
        return (this.articulos[0].render(link) + this.articulos[1].render(link) + this.articulos[2].render(link));
    };
}

function Articulo (titulo,contenido) {
    this.titulo = titulo;
    this.contenido = contenido;
    this.render = function(link) {
        return '<div id="'+ 1 +'"><a href="#" onclick="cargarArticulo(\"' + link + '\");return false;"> <h3>' + this.titulo + '</a></h3><br><p>'+ this.contenido + '</p></div>';
    };
}

var articuloTest = '<h3>Titulo1</h3><p>Noticia: bla bla bla bla bla bla bla bla bla blaa. </p>';

function cargarArticulo(id){

    document.getElementById('1').innerHTML = articuloTest;
/*    if(samePage){
        return false;
    }
    else return true;
*/
}

window.onload = function(e){
    var titulo1 = "Titulo";
    var contenido1 = "Contenido";
    var articulo1 = new Articulo(titulo1,contenido1);
    var articulos = [articulo1, articulo1, articulo1];
    var m = new ManejadorDeArticulos(articulos);
    document.getElementById('test').innerHTML = m.render();
};


function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

