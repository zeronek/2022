const btn = document.getElementById('btn'); //선언

function getRandom() {
 
  const min = parseInt(document.getElementById('min').value, 10); //변환
  const max = parseInt(document.getElementById('max').value, 10); //변환
  const random = Math.floor(Math.random() * (max - min + 1)) + min; //math. : 랜덤
  return random;
} // 난수 얻기

function btnClick() {
  // 버튼 클릭
  const box = document.getElementById('box');
  const random = getRandom();
  const animationTime = 10;
  let start = random - 50;

  const repeat = setInterval(function boxAnimation() {
    btn.disabled = 'disabled';
    box.innerHTML = start;

    if (start === random) {
      clearInterval(repeat);
      btn.disabled = '';
    }

    start += 1;
  }, animationTime);
}

btn.addEventListener('click', btnClick);
