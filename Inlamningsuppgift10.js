
 //börjar med att lyssna efter click event från button.
 add.addEventListener("click", function () {
  
 //sedan hämtar jag var texten ska komma från input's id. 
 let text = document.getElementById("idea");
  
//sedan hämtar jag id från listan jag vill lägga inputen i.
  let lista = document.getElementById("list");
  
//sedan skapar jag ett li element i ul listan jag hämtade tidigare.   
  let li = document.createElement('li');
  
//sedan talar jag om var texten ska lägga sig i listan. 
  li.appendChild(document.createTextNode(text.value));
  
// sedan lägger jag till texten sist i listan.
lista.appendChild(li);
  text.value = "";
  
})
 
 
btnDelete.addEventListener("click", deleteTxt);
btnChange.addEventListener("click", changeTxt);
list.addEventListener("click", listClick);
let select;

function listClick(e) {
    select = e.target;
    var text = document.getElementById('idea')
    text.value = e.target.innerHTML;
    e.target.style.backgroundColor = '#33cc33';
    e.target.style.color = 'white';
}

function changeTxt() {
    let text = document.getElementById('idea');
    select.innerHTML = text.value;
    select.style.backgroundColor = "#ff9900";
    select.style.color = "white";
}
    
function deleteTxt() {
    list.removeChild(select);
}
