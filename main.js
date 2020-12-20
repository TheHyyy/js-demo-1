

var div1 = document.createElement('div');
div1.className = 'demo'
div1.style.top = 'auto'



document.body.appendChild(div1)

let isDragging = false;
let lastX;
let lastY;

div1.onmousedown = function (e) {
    lastX = e.clientX;
    lastY = e.clientY;
    isDragging = true
}

document.onmousemove = function (e) {

    if (isDragging === true) {

        let deltaX = e.clientX - lastX;
        let deltaY = e.clientY - lastY;
        let top = parseInt(div1.style.top) || 0;
        let left = parseInt(div1.style.left) || 0;

        div1.style.top = top + deltaY + 'px';
        div1.style.left = left + deltaX + 'px';
        lastX = e.clientX;
        lastY = e.clientY;
    }

}
div1.onmouseup = function () {
    isDragging = false

}
