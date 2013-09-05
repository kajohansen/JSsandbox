var canvas = null;
var context = null;
var bufferCanvas = null;
var bufferCanvasCtx = null;
var flakeArray = [];
var flakeTimer = null;
var animTimer = null;
var maxFlakes = 360;

function flake (arg) {
	this.x = 300 + 250 * Math.cos(arg);
	this.y = 300 + 250 * Math.sin(arg);
	this.speed = Math.round(Math.random() * 5) + 1;
	this.width = (Math.random() * 20);
	this.height = this.width;
}
			
function addFlake (arg) {
	flakeArray[flakeArray.length] = new flake(flakeArray.length);
	if (flakeArray.length == maxFlakes) {
		clearInterval(flakeTimer);
		window.clearInterval(animTimer);
		console.log("360 flakes drawn\ndone!");
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

function anim() {
/* 	update(); */
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
/* 	flakeTimer = setInterval(addFlake, 10); */
	
/* 	draw(); */
	
/* 	animTimer = window.setInterval(anim, 10); */
}
init();

document.getElementsByTagName("body")[0].onclick = function() {
	console.log("Terminating");
	window.clearInterval(animTimer);
	myWorker.terminate();
}