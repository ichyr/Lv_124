function submitform(){
	var text=document.getElementById('text').value;
	if (text!==''){
			var parent = document.getElementById('events');
			var NewDiv =document.createElement('div');
			var newElem = document.createElement('li');
			newElem.innerHTML = 'Подія<!-- додати лічильник --><span class="tip">' + text + '</span>';
			parent.appendChild(NewDiv);
			NewDiv.setAttribute("onclick", "remove();");
			NewDiv.appendChild(newElem);
			document.getElementById('text').value='';
			document.getElementById('err_text').innerHTML='';
	}

	else {
		document.getElementById('err_text').innerHTML='(введіть текст події)';
	}
}
function remove(){
	var elem = parentElem.this;
	var parent= parentElem.elem;
	parent.removeChild();
}
