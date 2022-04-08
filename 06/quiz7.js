 const $point = document.querySelector('#point');
 const $life = document.querySelector('#life');
 const $bug = document.querySelector('#bug');
 const $box = document.querySelector('.box');
 const bugSpeed = 1000;
 

 let point = 0;
 let life = 10;
 let timerId = 0;
 function move() {
    $bug.style.display = 'block';
    const x = getRandom($box.offsetWidth - $bug.offsetWidth);
    const y = getRandom($box.offsetHeight - $bug.offsetHeight);

    $bug.style.left = `${x}px`;
    $bug.style.top = `${y}px`; 
 }

 function getRandom(max){
     return Math.floor(Math.random() * max);
 }

 $bug.addEventListener('click', (event)=>{
    point += 1;
    $point.innerHTML = point;
    $bug.style.display = 'none';
    start();
    event.stopPropagation();

 });

 $box.addEventListener('click', ()=>{
     life -= 1;
     $life.innerHTML = life;
     setTimeout(() =>{
        if(life === 0){
            alert('gameover');
            clearInterval(timerId);
     
        }
     },0)
     
 })

 function start() {
     clearInterval(timerId);
     
    timerId = setInterval(move, bugSpeed); 
    console.log()
 }

 start();
 