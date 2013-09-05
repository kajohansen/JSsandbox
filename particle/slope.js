var stepLimit = 30;
var step = 0;

function setX(cElem, i) {
	
	var stepDX = (((cElem.destination[0] - cElem.origin[0]) / stepLimit) * step) + 450;
	
	return stepDX;
}

function setY(cElem) {

	var stepDY = (((cElem.destination[1] - cElem.origin[1]) / stepLimit) * step) + 450;
		
	return stepDY;
}

function animate() {
	
	for (var k = 0; k < circleArray.length; k++) {
	
	circleArray[k].xVar = setX(circleArray[k]);
	circleArray[k].yVar = setY(circleArray[k]);

	if (circleArray[k].xVar > window.innerWidth || circleArray[k].svgElement.offsetTop > window.innerHeight) {
		circleArray[k].xVar = circleArray[k].origin[0];
		circleArray[k].xVar = circleArray[k].origin[1];
	}

	circleArray[k].move(circleArray[k].xVar, circleArray[k].yVar);
	
	}
	
	if (step < stepLimit) {
		step++;
		myWorker.postMessage(new Date().getTime()+10);
	} else {
		myWorker.terminate();
	}
	
}

function onError(e) {
	console.log("Error : [" + e.filename + ", line " + e.lineno + "] " + e.message);
}

var myWorker = new Worker("worker.js");
myWorker.onmessage = animate;
myWorker.onerror = onError;
myWorker.postMessage(new Date().getTime()+10);

document.getElementById("site").addEventListener('click', function() {
	console.log("Terminating");
	myWorker.terminate();

}, true);

