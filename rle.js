let fs = require('fs');
let arg = process.argv;
let inText, finalText;
let codeText = '', decodeText = '', str = '';
let i = 0, n = 1, substringLen = 0, j = 0;

fs.readFile(arg[3], (err, data) => {
	if (err){
		console.error(err);
		return;
	}
	inText = data.toString();
	if (arg[2] == 'code'){
		while (i < inText.length){
			while(inText.charAt(i) == inText.charAt(i+n)){
				n++;
			}
			str = inText.slice(i, i+n);
			substringLen = n;
			if (str[0] == '#') {
				while (substringLen >= 255) {
					codeText += '#' + String.fromCharCode(255) + str[0];
					substringLen -= 255;
				}
				codeText += '#' + String.fromCharCode(substringLen) + str[0];
			} else {
				while (substringLen >= 259) {
					codeText += '#' + String.fromCharCode(255) + str[0];
					substringLen -= 259;
				}
				if (substringLen >= 4){
					codeText += '#' + String.fromCharCode(substringLen - 4) + str[0];
				} else {
					codeText += str.slice(0, substringLen);
				}
			}
			i += n;
			n  = 1;
		}
		finalText = codeText;
	} else if (arg[2] == 'decode') {
		while (i < inText.length){
			if (inText.charAt(i) == '#') {
				if (inText.charAt(i+2) == '#') {
					for(j = 0; j < inText.charCodeAt(i+1); j++) {
						decodeText += inText.charAt(i+2);
					}
				} else {
					for(j = 0; j < inText.charCodeAt(i+1) + 4; j++) {
						decodeText += inText.charAt(i+2);
					}
				}
				i += 3;
			} else {
				decodeText += inText.charAt(i);
				i++;
			}
		}
		finalText = decodeText;
	}
	fs.writeFile(arg[4], finalText, (err) =>{
		if (err) {
			console.error(err);
		}
	})
})