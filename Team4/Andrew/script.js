window.onload = function() {
	var calculator = document.getElementById("calculator");
	var display = document.getElementById("display");
	var firstNumber= "";
	var secondNumber = "";
	var operator;

	function calculate(operator, firstNumber, secondNumber) {
		switch (operator) {
			case "+":
				return +firstNumber + +secondNumber;
				break;
			case "-":
				return +firstNumber - secondNumber;
				break;
			case "*":
				return firstNumber*secondNumber;
				break;
			case "/":
				return firstNumber/secondNumber;
				break;
		}
	}

	calculator.onclick = function(e) {
		var target = e && e.target || event.srcElement;
		var sq = 0;
		if(target.className == "number") {
			if(!operator) {
				firstNumber+=target.innerHTML;
			}
			else {
				secondNumber+=target.innerHTML;
			}
			display.innerHTML+= target.innerHTML;
		}
		else if(target.className == "operator") {
			
			if(!operator) {
				if(target.getAttribute("data-value") == "sqr"){
					if (firstNumber){
						sq = Math.sqrt(firstNumber);
						firstNumber = display.innerHTML = sq;
					}
				}
				else{
					operator = target.getAttribute("data-value");
					display.innerHTML = "";
				}		
			}
			else {
					firstNumber = calculate(operator, firstNumber, secondNumber);
					operator = target.getAttribute("data-value");
					secondNumber = "";
					display.innerHTML = "";
				}
		}
		else if(target.className == "clear") {
			display.innerHTML = "";
			firstNumber = "";
			secondNumber = "";
			operator = "";
		}
		else if (target.className == "eval") {
			if(!secondNumber) return;
			firstNumber = display.innerHTML = calculate(operator, firstNumber, secondNumber);
			secondNumber = "";
			operator = "";
		}
		else if(target.className == "dot") {
			if(display.innerHTML.indexOf(".") == -1) {
				if(!operator) {
					firstNumber+=target.innerHTML;
				}
				else {
					secondNumber+=target.innerHTML;
				}
				display.innerHTML+= target.innerHTML;
			}
			else return;
		}
	}
}
