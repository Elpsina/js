function Largest(str){
		for (let a=str[0].length; a=>0; a--){
			for (let b=0; b<=str[0].length-a; b++){
				let line = str[0].slice(b,b+a+1);
				let reg = new RegExp(line);
				let found = true;
				for (let i=1; i<str.length; i++){
					if(reg.test(str[i]))
					continue;
					found=false;
					break;}
					if(found)
					return line;		
			}
		}
		return "";
		}
		if(process.argv.length <= 2)
		console.log("");
		else
		console.log(Largest(process.argv.slice(2)));
	