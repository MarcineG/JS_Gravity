let canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let c = canvas.getContext('2d');

let colors = [
    // "#367300",
    "#DB2B30",
    "#8F1D2C",
    "#5A142A",
    "#400D2A",
    "#140A25"
];
let amount = 400;
let gravity = 1;


function Ball() {
    this.rad = Math.floor((Math.random() * 30)+10);
    this.x = Math.floor((Math.random() * innerWidth/4)+innerWidth/3);
    this.y = Math.floor(Math.random() * (innerHeight/3));

    this.dy = 1;
    this.dx = (Math.random()*4)-2;
    this.color = colors[Math.floor(Math.random() * 5)];
    this.friction =  Math.random()*0.1+0.89;    //1 - Math.floor(Math.random()*0.01);

    this.update = function() {
        // if(Math.abs(this.dy) < 0.000000001) {
        //     this.dy = 0;
        //     this.y = canvas.height - this.rad;
        // }
        // else
            if(this.y + this.rad >= canvas.height && this.dy > 0) {
                this.y = canvas.height - this.rad;
            this.dy = -Math.abs(this.dy * this.friction);
            this.dx = this.dx * this.friction;
        }
        else {
            this.dy += gravity;
        }

        if(this.x + this.rad > canvas.width || this.x - this.rad < 0) {
            this.dx = -this.dx;
        }

        this.x += this.dx;
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