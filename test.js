//Парсинг аргументов командной строки. Работа с файлами.
//https://nodejs.org/docs/latest/api/process.html#process_process_argv
/*
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
  //console.log(index, val);
});


let fs = require('fs');

fs.readFile('input.txt', (err, data) => {
	console.log(data);
	//https://www.w3schools.com/nodejs/met_buffer_tostring.asp
	console.log(data.toString());
});



let fs = require('fs');
let arg = process.argv;

fs.readFile(arg[2], (err, data) => {
	//https://js-node.ru/site/article?id=21
	if (err){
		console.error(err);
		return;
	}
	console.log(data);
	console.log(data.toString());
});

console.log('I work here!');
*/

let fs = require('fs');
let a = '', b = '';
fs.readFile('input.txt', (err, data) => {
	a = data.toString();
	fs.readFile('decode.txt', (err, data) => {
		b = data.toString();
		console.log(a);
		console.log(b);
		if (a == b) {
			console.log('равны')
		} else {
			console.log('не равны')
		}
	})
});
