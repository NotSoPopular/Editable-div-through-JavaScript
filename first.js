console.log('This is tutorial 25')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Create a new element
let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val==null){
 text = document.createTextNode('This is my element. click to edit it');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

// Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first)

let felem=document.createElement('textarea');
felem.setAttribute('class','textarea');
felem.setAttribute('id','textarea');
felem.setAttribute('rows',3);
felem.value=val;
let elem;
// add event listener to the divElem
divElem.addEventListener('click', function () {
    
    divElem.replaceWith(felem);
    //listen for the blur event on textarea
    localStorage.setItem('text', felem.value);
    felem.addEventListener('blur', function() {
        let textNode=document.createTextNode(felem.value);
        divElem.removeChild(divElem.firstChild);
        divElem.appendChild(textNode);
        let rep=felem.value;
        felem.replaceWith(divElem);
        localStorage.setItem('text',rep);
    })
});


