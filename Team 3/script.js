function submitform(){
	var text = document.getElementById('text').value;
	var actionCount, actionId ;
	
	if (text!==''){
			var parent = document.getElementById('events');
			var newElem = document.createElement('li');

            actionCount =  parent.getElementsByTagName('li').length + 1;
            actionId = randomizer(-9999, 9999) + "id";
			newElem.innerHTML ='Подія ' +  actionCount + '<span class ="closeAction" id ="' + actionId + '"' + '> </span>' + '<span class="tip">' + text + '</span>';
            parent.appendChild(newElem);
			parent = document.getElementById(actionId);
			parent.addEventListener("click", removeAction);
			document.getElementById('text').value='';
			document.getElementById('err_text').innerHTML='';
	}
	else {
	  document.getElementById('err_text').innerHTML='(введіть текст події)';
	};
};

function removeAction(){
 var parent = document.getElementById('events');
 parent.removeChild(this.parentNode); 
};

function randomizer(max, min) {
   var rand = min - 0.5 + Math.random()*(max-min+1);
   
    rand = Math.round(rand);
   return rand;
};