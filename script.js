let canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let c = canvas.getContext('2d');

let colors = [
    "#DB2B30",
    "#8F1D2C",
    "#5A142A",
    "#400D2A",
    "#140A25"
];
let amount = 100;
let gravity = 1;
let friction = 0.9;


function Ball() {
    this.x = Math.floor((Math.random() * innerWidth-50)+50);
    this.y = Math.floor(Math.random() * (innerHeight/2));
    this.dy = 1;
    this.rad = Math.floor((Math.random() * 20)+10);
    this.color = colors[Math.floor(Math.random() * 5)];

    this.update = function() {
        if(this.y + this.rad > canvas.height && this.dy > 0) {
            this.dy = -this.dy * friction ;
        }
        else {
            this.dy += gravity;
        }
        this.y += this.dy;
        this.draw();
    };

    this.draw = function() {
        c.beginPath();
        c.arc(this.x,this.y,this.rad,0,Math.PI * 2,false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}


let ballArray = [];
for(let i=0; i<amount;i++) {
    ballArray.push(new Ball());
}
console.log(ballArray);
//let ball = new Ball(100,100,1,40,randColor);


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0; i<ballArray.length;i++) {
        ballArray[i].update();
    }
}

requestAnimationFrame(animate);