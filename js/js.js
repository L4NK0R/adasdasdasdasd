let button = document.querySelector('.button');
let count = 0;
let num = document.querySelector('p');
button.addEventListener('click', Schet);




function Schet(){
    count++;
    num.innerText = `${count}`;

}