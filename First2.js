function Largest(){
		if (arguments.length < 1)
		return ("eror\n"); 
		for (let a=arguments[0].length; a>0; a--){
			for (let b=0; b<arguments[0].length-a; b++){
				let reg = new RegExp(arguments[0].slice(b,b+a));
				let found = true;
				for (let i=1; i<arguments.length; i++){
					if(reg.test(arguments[i]))
					continue;
					found=false;
					break;}
					if(found)
					return reg;		
			}
		}
		return "eror 404\n";
		}
	var sub=Largest("AbCqwe", "tyuAbC1234", "5678AbCyui");
	console.log(sub + "\n");