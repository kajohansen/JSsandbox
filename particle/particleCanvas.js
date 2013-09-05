var canvas = null;
var context = null;
var bufferCanvas = null;
var bufferCanvasCtx = null;
var flakeArray = [];
var particleTimer = null;
var animTimer = null;
var maxFlakes = 50;
/* var image = new Image(); */
/* image.src = "images/snowflake.png"; */

function flake (arg) {
	this.x = canvas.width / 2;
	this.y = canvas.height / 2;
	this.speed = Math.round(Math.random() * 5) + 1;
	this.width = (Math.random() * 3);
	this.height = this.width;
}

function addFlake (arg) {
	flakeArray[flakeArray.length] = new flake();
	if (flakeArray.length == maxFlakes) {
		clearInterval(particleTimer);
	};
}

function blank (arg) {
	context.clearRect(0,0, canvas.offsetWidth, canvas.offsetHeight);
	bufferCanvasCtx.clearRect(0,0, canvas.offsetWidth, canvas.offsetHeight);
}

function draw (arg) {
	context.save();
	blank();
	
	for (var i=0; i < flakeArray.length; i++) {
		bufferCanvasCtx.fillStyle = 'grey';
		bufferCanvasCtx.fillRect(flakeArray[i].x, flakeArray[i].y, flakeArray[i].width, flakeArray[i].height);
	};
	
	// copy the entire rendered image from the buffer canvas in to the document canvas
	context.drawImage(bufferCanvas, 0,0, canvas.offsetWidth, canvas.offsetHeight);
	context.restore();
}

function update (arg) {
	for (var i = 0; i < flakeArray.length; i++) {
	
		var y = m * flakeArray[i].x + b;
	
		if (flakeArray[i].y < canvas.offsetHeight) {
			
			flakeArray[i].y = y;
			
			if (flakeArray[i].y > canvas.offsetHeight) {
				flakeArray[i].y = canvas.offsetHeight / 2;
			} // end if 2
			
			flakeArray[i].x += 1;
			
			if (flakeArray[i].x > canvas.offsetWidth) {
				flakeArray[i].x = canvas.offsetWidth / 2;
			}; // end if 2
		} // end if 1
	} // end for
	
} // end update

function anim() {
	update();
	draw();
} // end anim

function init() {
	canvas = document.getElementById("canvas1");
	context = canvas.getContext('2d');
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
	context.width = canvas.offsetWidth;
	context.height = canvas.offsetHeight;
	
	bufferCanvas = document.createElement("canvas");
	bufferCanvas.width = canvas.offsetWidth;
	bufferCanvas.height = canvas.offsetHeight;
	bufferCanvasCtx = bufferCanvas.getContext('2d');
	bufferCanvasCtx.canvas.width = canvas.offsetWidth;
	bufferCanvasCtx.canvas.height = canvas.offsetHeight;
	
	// initialize the rects
	particleTimer = setInterval(addFlake, 100);
	
	draw();
	
	animTimer = window.setInterval(anim, 10);
}
init();