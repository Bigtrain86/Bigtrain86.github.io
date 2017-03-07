document.getElementById('duplicater0').onclick = duplicate;


var i = 0;

function duplicate() {
    var original = document.getElementById('duplicater' + i);
    var clone = original.cloneNode(true); 
    clone.id = "duplicetor" + ++i; 
    clone.onclick = duplicate; 
    original.parentNode.appendChild(clone);
}