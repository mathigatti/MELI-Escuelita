/**
 * Created by mgatti on 11/29/16.
 */

var titulo1 = "Marcelo Open le contestó a Jorge Rial y negó haber agredido a las hijas del conductor.";
var titulo2 = "Jorge Rial y el video de su hija Rocío haciéndose su primer tatuaje: Crecen y toman decisiones";
var titulo3 = "Jorge Rial se emocionó hasta las lágrimas por una carta de su hija contra el bullying";
var contenido1 = "La semana pasada Jorge Rial aseguró que se sumaba a la campaña contra el bullying , luego de haber recibido un tuit agresivo hacia su persona y sus hijas, del abogado Marcelo Open. No obstante, este fin de semana el tuitero dijo que jamás habló del chimentero ni de sus hijas en una entrevista con el programa Resumen de una semana agitada, ciclo que se emite por Radio LK. Las razones por las que escribo en Twitter son humorísticas. El mensaje nunca estuvo dirigido a este señor ni sus hijas. Era para una persona que conozco, dijo Open. Además -agregó- en ese horario estaba haciendo un trámite fuera del país. Jamás me metería con dos menores. Sean gordas o flacas. Pero recogió el guante y se hizo cargo de algo que no le correspondía. A partir de ahí desató toda su ira y veneno que desde hace tiempo tiene guardado contra mí.El conductor del programa radial, ante este comentario, le respondió que le parecía una tomada de pelo que niegue que ese tuit era para el conductor de Intrusos. Esa es tu interpretación y es muy subjetiva -contestó-. No voy a discutir lo que vos pensás. Creo que Twitter es un juego donde se ve el sentido del humor de cada uno. Si me llamás para preguntarme por qué lo hice, dejame que yo te dé mi explicación. Si vamos a hacer un análisis sintáctico de cada palabra de los 800 millones de usuarios de Twitter, habrá 800 millones de interpretaciones. Hay un dicho que dice al que le quepa el sayo... Si Rial lo tomó para él es su problema";
var contenido2 = "El conductor de Intrusos publicó en Instagram una grabación de la adolescente mientras le inmortalizaban diseño. Jorge Rial (55) está presente en cada paso y decisión que sus hijas toman... y las acompaña en cada desafío que enfrentan. Tal como lo hizo con el primer tatuaje de Rocío (17), quien decidió plasmarse un significativo diseño en la piel para siempre. Arranca el primer tatuaje de @rochi_rial. Crecen y toman decisiones. Uno acompaña. Todo bajo la atenta mirada de @agustinakampfer, escribió el conductor de Intrusos en su cuenta de Instagram junto a un video que muestra el proceso mientras le realizan el tattoo. En la grabación, se ve a la adolescente y hermana de Morena (16) tranquila y sin aparente rastro de dolor, acompañada -según la descripción de Rial- de la novia de Jorge. Además, en las imágenes se llega a ver el motivo elegido: un trival con forma de lobo.";
var contenido3 = "Jorge Rial se puso al hombro la campaña contra el bullying en redes sociales, y luego de un grave episodio con Marcelo Open se emocionó hasta las lágrimas con un texto que escribió su hija Morena. Esta tarde, recordemos, el Intruso estalló contra el empresario, quien publicó un agresivo tuit contra sus hijas. De Jorgito podemos decir que extorsiona, que lava guita inventando giras, que es cornudo, pero debemos destacar que adoptó dos hipopotámos, publicó Open. Rial salió al cruce de estas palabras, y aseguró que llevará al empresario ante la Justicia.";

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

function Articulo (titulo,contenido,id) {
    this.titulo = titulo;
    this.contenido = contenido;
    this.render = function() {
        return '<div><a href=\'#\' onclick=\'cargarArticulo(' + JSON.stringify(id) + ',' + JSON.stringify(titulo) + ',' + JSON.stringify(contenido) + '); return false;\'>' + this.titulo + '</a><br></div><div id=' + JSON.stringify(id) + '></div>';
    }
}

function cargarArticulo(id,titulo, contenido){
    if(samePage){
         var articulo = '<p>' + JSON.stringify(contenido) +'</p><br><a href=\'#\' onclick=\'minimizarArticulo(' + JSON.stringify(id) + ');return false;\'>Volver</a>';
         document.getElementById(id).innerHTML = articulo;
    }
    else {
        var articulo = '<p>' + JSON.stringify(contenido) + '</p>';
        document.getElementById(id).innerHTML = articulo;
    }
}

function minimizarArticulo(id){
    document.getElementById(id).innerHTML = " ";

}

window.onload = function(e){
    var articulo1 = new Articulo(titulo1,contenido1,"id1");
    var articulo2 = new Articulo(titulo2,contenido2,"id2");
    var articulo3 = new Articulo(titulo3,contenido3,"id3");
    var articulos = [articulo1, articulo2, articulo3];
    var m = new ManejadorDeArticulos(articulos);
    document.getElementById('links').innerHTML = m.render();
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