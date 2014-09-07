window.onload = function() {
	
	var keys = document.querySelectorAll('#calculator span'); 
	var text = document.getElementById("screen"); 
	var i = 0;
	var len = keys.length;
	
	var prev = "num";
	var cur = "";
	var arg=0;
	var a=0;
	var b=0;
	var fx="";
	
	for(i; i < len; i++) {				
		keys[i].onclick = function(e) {	
			var btnType = this.className;
			var btnData = this.innerHTML;
			var btnMath = this.id;
			clickBtn(btnType,btnData,btnMath);
		}
	}	
	
	function clickBtn(type,data,math){
		
		if (type == "clear"){
			text.innerHTML = "";
			a = 0;
			arg = 0;
			fx = "";
		}
		if (type == "num"){
			if (fx=="eq"){
				fx = "";
			}
				arg = +data + arg*10;
				text.innerHTML += data;
		}
		if (type == "operator"){
			if ((a)&&(!arg)){
				text.innerHTML += data;
			}
			if (!a){
				a = arg;
				fx = math;
				text.innerHTML += data;
			}
			else{
				if ((arg)&&(fx)){
					result = compile(a,arg,fx);
					text.innerHTML = result;
					a = +result;
					//fx = "";
					fx = math;
					if (fx!="eq")
						text.innerHTML += data;
				}	
			}
			arg = 0;
		}
	}
	
	function compile(x,y,f){
		var result = 0;
		switch (f) { 
			case 'div': 
				result = x/y; 
				break;
			case 'mul': 
				result = x*y; 
				break;
			case 'dec': 
				result = x-y; 
				break;
			case 'inc': 
				result = x+y; 
				break;
			case 'sqr': 
				result = "in progress"; 
				break;
			case 'eq': 
				result = "in progress"; 
				break;
		}
		return result;
	}
}	