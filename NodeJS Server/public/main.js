/**
 * Created by mgatti on 11/29/16.
 */

window.onkeydown = function(e){
    if (e.keyCode == 0 || e.keyCode == 32) {
        var number = prompt("Please enter a number", "");

        if (number != null) {
            document.getElementById('test').innerHTML = '<h>' + 'El mes ' + number + ' es ' + mes(number) + '</h>';

        }
    }
};

var factorial = function(n){
    if (n == 0) return 1;
    return n*factorial(n-1);
};

var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

var mes = function(m){
    if (m < 12){
        return meses[m-1];
    }
   return 'Numero de mes invalido';
};