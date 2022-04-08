 const $point = document.querySelector('#point');
 const $life = document.querySelector('#life');
 const $bug = document.querySelector('#bug');
 const $box = document.querySelector('.box'); 
 const bugSpeed = 1000;   //선언
 

 let point = 0; //최초 점수
 let life = 10;  //최초 목숨
 let timerId = 0;
 function move() {
    $bug.style.display = 'block'; //잡았을때 다시 나타나기
    const x = getRandom($box.offsetWidth - $bug.offsetWidth); // 랜덤 위치
    const y = getRandom($box.offsetHeight - $bug.offsetHeight); // 랜덤 위치

    $bug.style.left = `${x}px`; 
    $bug.style.top = `${y}px`; 
 }

 function getRandom(max){
     return Math.floor(Math.random() * max);
 }     // 랜덤 

function hit (event) {
    point += 1;
    $point.innerHTML = point;
    $bug.style.display = 'none';
    start();
    event.stopPropagation();

}; //잡았을때 점수


function fail (event){
    life -= 1;
    $life.innerHTML = life;
    setTimeout(() => {
        if (life === 0) {
            alert('gameover');
            clearInterval(timerId);

        }
    }, 0);

};  //실패 했을때 목숨
 

 function start() {
     clearInterval(timerId);
     
    timerId = setInterval(move, bugSpeed); 
    console.log()
 }  // 움직이는 속도

 start();
 $bug.addEventListener('click', hit);
 $box.addEventListener('click', fail);