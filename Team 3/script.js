function submitform(){
	var idString="_taskId_";
	var textArea = document.getElementById('text');
	var err_text = document.getElementById('err_text');
	var text = textArea.value.trim();
	var delId ;
	if (!text.length){
	  err_text.innerHTML='(введіть текст події)';
	  return;
	};

	var parent = document.getElementById('events');
	var actions =  parent.getElementsByTagName('li');
	
    var actionId = 1;
	if (actions.length) {
		actionId = +actions[actions.length-1].id.substring(idString.length)+1;
	 }
    var newElem = document.createElement('li');
    newElem.setAttribute("id", idString+actionId);
	newElem.innerHTML ='Подія ' +  actionId +
	'<span class="tip">' + text + '</span>'+
    '<span class ="closeAction" id ="' + actionId + '"' + '> </span>';
    parent.appendChild(newElem);
	parent = document.getElementById(actionId);
	parent.addEventListener("click", removeAction);
    textArea.value = '';
    err_text.innerHTML='';
};

function removeAction(){
	var parent = document.getElementById('events');
	parent.removeChild(this.parentNode); 
};


