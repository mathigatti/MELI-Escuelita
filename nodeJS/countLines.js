var fs=require('fs');
filename=process.argv[2];
var data=fs.readFileSync(filename);
var res=data.toString().split('\n');
var dict = {};
for (i=0; i < res.length; ++i){
	if (dict[res[i].length] == null){
		dict[res[i].length] = 1;	
	}
	else{
		dict[res[i].length] = dict[res[i].length] + 1;	
	}
}
console.log(dict);
//var stringDict = JSON.stringify(dict);
//console.log(stringDict);