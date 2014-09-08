window.onload = function() {
	
	var keys = document.querySelectorAll('#calculator span'); 
	var text = document.getElementById("screen"); 
	
	function keyBinding(){
		var i = 0;
		var len = keys.length;
		for(i; i < len; i++) {
			keys[i].onclick = function(e) {
				var btnType = this.className;
				var btnData = this.innerHTML;
				var btnMath = this.id;
				clickBtn(btnType,btnData,btnMath);
			}
		}
	}	
	
	function clickBtn(type,data,math){
		var checked = false;
		
		if (type == "clear"){
			text.innerHTML = "";
		}
		if (type == "num"){
			text.innerHTML += data;
		}
		if (type == "operator"){
			if (data == "="){
				text.innerHTML = compile();
			else
				text.innerHTML += data;
		}
	}
	
	function compile(){
		var a = parseFloat(text.innerHTML);
		return a;
	}
	
	keyBinding();
}	