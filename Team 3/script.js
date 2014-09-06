function submitform(){
	var text=document.getElementById('text').value;
	if (text!==''){
			var parent = document.getElementById('events');
			var newElem = document.createElement('li');
			newElem.innerHTML = 'Подія<!-- додати лічильник --><span class="tip">' + text + '</span>';
			newElem.setAttribute("onclick", "remove();");
			parent.appendChild(newElem);
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
