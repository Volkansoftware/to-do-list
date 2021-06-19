var buttonDOM = document.querySelector('#button-addon2');
var todoDOM = document.querySelector('#to-do');
var listDOM= document.getElementById('list');
var timesDOM= document.querySelector('#times');
var toastDOM = document.querySelector('#toast');
buttonDOM.addEventListener('click',function()//eleman ekleme
{
 if(todoDOM.value === ``)//toast
 {
  alert('boş eleman eklenemez');
 }
 else {
const a = document.createElement('a');
const i = document.createElement('i');
a.setAttribute('href','#');

a.classList.add('list-group-item');
i.classList.add('fas','fa-times','delete');

var bosluk = document.createTextNode(``);
i.appendChild(bosluk);
a.appendChild(i);
var textnode = document.createTextNode(`${todoDOM.value}`)
a.appendChild(textnode);
listDOM.appendChild(a);


//iki ayrı fonksiyon yapma yerini birleştirdim


}
});// eleman ekleme sonu


listDOM.addEventListener('click',function(e) // tek eleman silme ve yazı üstü çizilme 
{
if(e.target.className==='fas fa-times delete')//i ye tıklandığı zaman
{
 e.target.parentElement.remove();   
}
else if (e.target.className==='list-group-item')// a ya tıklandığı zaman
{
    const is = document.createElement('i');
    is.classList.add('fas','fa-check','checks');
    e.target.appendChild(is);
    e.target.classList.add('bg-blue','text-decoration-line');
    
    console.log('bastim');
}
});
