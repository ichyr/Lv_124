window.onload = function() {
	var calculator = document.getElementById("calculator");
	var display = document.getElementById("display");
	var firstNumber= "";
	var secondNumber = "";
	var operator;

	function calculate(operator, firstNumber, secondNumber) {
		var abs = parseFloat(firstNumber+operator+secondNumber);
		return abs;
	}

	calculator.onclick = function(e) {
		var target = e && e.target || event.srcElement;
		if(target.className == "number") {
			if(!operator) {
				display.innerHTML+= target.innerHTML;
				firstNumber+=target.innerHTML;
			}
			else {
				display.innerHTML+= target.innerHTML;
				secondNumber+=target.innerHTML;
			}
		}
		else if(target.className == "operator") {
			if(!operator) {
				operator = target.getAttribute("data-value");
				//display.innerHTML = "";
				display.innerHTML+=operator;
			}
			else {
				firstNumber = calculate(operator, firstNumber, secondNumber);
				operator = target.getAttribute("data-value");
				secondNumber = "";
				display.innerHTML+=operator;

			}
			
		}
		else if(target.className == "clear") {
			display.innerHTML = "";
			firstNumber = "";
			secondNumber = "";
			operator = "";
		}
		else if (target.className == "eval") {
			firstNumber = display.innerHTML = calculate(operator, firstNumber, secondNumber);
			secondNumber = "";
			operator = "";
		}
		else if(target.className == "dot") {
			if(display.innerHTML.indexOf(".") == -1) {
				if(!operator) {
					display.innerHTML+= target.innerHTML;
					firstNumber+=target.innerHTML;
				}
				else {
					display.innerHTML+= target.innerHTML;
					secondNumber+=target.innerHTML;
			}
			}
			else return;
		}
	}
}

