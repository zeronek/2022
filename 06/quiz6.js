const $num = document.getElementById('num');
const $btn = document.getElementById('btn');
const $result = document.getElementById('result');

function print(){
    const result = [];
    const num = parseInt($num.value, 10);

    if(isNaN(num)) {
        alert('숫자를 입력하세요 !!');
        return;
    }

    for(let i = 1; i<10; i ++){
         result.push(`${num} x ${i} = ${num *i}`);//템플릿 
    }
    $result.innerHTML = result.join('<br>');//줄바꿈

}   
$btn.addEventListener('click', print)