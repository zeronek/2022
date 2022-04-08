var box = document.querySelector('.box');
var box1 = document.querySelector('.box1');
Drag(box);
Drag(box1);


function Drag(ele){ 
    var x1 = 0, x2 = 0, y1 = 0, y2 = 0; 
    ele.addEventListener('mousedown', Down)  

function Down(e) { 
    x1 = e.clientX; 
    y1 = e.clientY; 
    document.addEventListener('mousemove', Move)
    document.addEventListener('mouseup', Up) 
}

function Move(e) { 
    x2 = x1 - e.clientX; 
    y2 = y1 - e.clientY; 
    x1 = e.clientX; 
    y1 = e.clientY;
    ele.style.left = (ele.offsetLeft - x2) + "px";
    ele.style.top = (ele.offsetTop - y2) + "px"; 
}

function Up() { 
    document.removeEventListener('mouseup', Up)
    document.removeEventListener('mousemove', Move)
} 
}
