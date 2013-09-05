
function slope(a, b) {
    if (a[0] == b[0]) {
        return null;
    }
    return (b[1] - a[1]) / (b[0] - a[0]);
}

function intercept(point, slope) {
    if (slope === null) {
        return point[0];  // vertical line
    }
    return point[1] - slope * point[0];
}

function getY(cElem) {
	var m = slope(cElem.origin, cElem.destination);
	var b = intercept(cElem.origin, m);
	var x = cElem.xVar;
	return m * x + b;
}

function animate() {
	
	for (var k = 0; k < circleArray.length; k++) {
		circleArray[k].xVar++;
		circleArray[k].yVar = getY(circleArray[k]);
	
/*
		if (circleArray[k].xVar > window.innerWidth || circleArray[k].svgElement.offsetTop > window.innerHeight) {
			circleArray[k].xVar = circleArray[k].origin[0];
			circleArray[k].xVar = circleArray[k].origin[1];
		}
*/
		if (circleArray[k].xVar > circleArray[k].destination[0] || circleArray[k].yVar > circleArray[k].destination[1]) {
			circleArray[k].xVar = circleArray[k].origin[0];
		}
		
		circleArray[k].move(circleArray[k].xVar, circleArray[k].yVar);
		
	}
	
	myWorker.postMessage(new Date().getTime()+2);
}

function onError(e) {
	console.log("Error : [" + e.filename + ", line " + e.lineno + "] " + e.message);
}

var myWorker = new Worker("worker.js");
/* myWorker.addEventListener("message", animate, true); */
/* myWorker.addEventListener("error", onError, true); */
myWorker.onmessage = animate;
myWorker.onerror = onError;
/* myWorker.postMessage(new Date().getTime()+10); */

document.getElementById("site").addEventListener('click', function() {
	console.log("Terminating");
	myWorker.terminate();

}, true);

