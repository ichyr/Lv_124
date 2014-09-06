function textcheck(){
var text=document.getElementById('text');
if (text.value!=='') { 
document.getElementById('err_text').innerHTML='';
return text.value;} 
else {
document.getElementById('err_text').innerHTML='* Введіть текст події'; return false;}
}
function submitform(){
var text = textcheck();
if (!!text){
		var parent = document.getElementById('events');
		var newElem = document.createElement('li');
		newElem.innerHTML = 'Подія<!-- додати лічильник --><span id="tip">' + text + '</span>';
		parent.appendChild(newElem);
		document.getElementById('text').value='';
		document.getElementById('err_text').innerHTML='';}

else {document.getElementById('err_text').innerHTML='* Введіть текст події';}
}