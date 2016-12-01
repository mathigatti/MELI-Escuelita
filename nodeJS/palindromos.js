var fs=require('fs');
filename=process.argv[2];
var palabra=filename.toString();
for (i=0; i < parseInt(palabra.length/2); i++){
	if (palabra[i] != palabra[palabra.length-i-1]){
		return console.log("No es palindromo");
	}
}
return console.log("Es palindromo");