// document.all[8].innerText = 'IronMan';
// Acess the document or tags by class & Id
document.getElementById('mainImg');
document.getElementsByClassName('oldImg');
document.getElementsByTagName('p');

// getAttribute & setAttribute
// img.getAttribute('id','spiderman');
// img.getAttribute('id');

// Manipulating Style
let heading = document.querySelector('h1');
// heading.style.color = 'purple';

let links = document.querySelectorAll('.box a');
// for(link of links){
//     link.style.color = 'purple'
// }
for(let i=0;i<links.length;i++){
    links[i].style.color = "pruple";
}

heading.classList.add("green");
heading.classList.remove("green");
heading.classList.contains;
heading.classList.toggle('green');

// Navigation
let ul = document.querySelector('ul');
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[1].previousElementSibling);

let img = document.querySelector('img');
img.previousElementSibling;
img.previousElementSibling.style;
img.previousElementSibling.style.color = 'green';

// Adding Element
let p = document.createElement('p');
p.innerHTML = "Hi I am a new p";

let body = document.querySelector('body');
body.appendChild(p);
// .append();
// .prepend();
// .insertAdjacent(where,element);

// Removing Elements
body.removeChild(p);
// body.remove();
