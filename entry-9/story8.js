const bee=document.querySelector('.bee');
let last_x=0;

window.addEventListener('mousemove',function(e){
    let x=e.clientX-15;
    let y=e.clientY-15;
    bee.style.left=x+'px';
    bee.style.top=y+'px';
    if(last_x<x){
        bee.classList.add('flip'); 
    }else{
        bee.classList.remove('flip');
    }
    last_x=x;


})