let canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let c = canvas.getContext('2d');



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
}

requestAnimationFrame(animate);