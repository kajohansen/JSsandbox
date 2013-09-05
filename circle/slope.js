
function slope(origin, destination) {
    if (origin[0] == destination[0]) {
        return null;
    }
    return (destination[1] - origin[1]) / (destination[0] - origin[0]);
}

function intercept(origin, slope) {
    if (slope === null) {
        return origin[0];  // vertical line
    }
    return origin[1] - slope * origin[0];
}

function getY(cElem) {
	var m = slope(cElem.origin, cElem.destination);
	var b = intercept(cElem.origin, m);
	var x = cElem.xVar;
	return m * x + b;
}

function animate() {
	
	for (var k = 0; k < circleArray.length; k++) {
		if (angle >= 270 || angle <= 90) {
			circleArray[k].xVar++;
		} else {
			circleArray[k].xVar--;
		}
		
		if (angle > 180) {
			circleArray[k].yVar = 600 - getY(circleArray[k]);
		} else {
			circleArray[k].yVar = getY(circleArray[k]);
		}
		
		
		console.log("Yvar : " + getY(circleArray[k]));
	
		if (circleArray[k].xVar > window.innerWidth || circleArray[k].svgElement.offsetTop > window.innerHeight) {
			circleArray[k].xVar = circleArray[k].origin[0];
			circleArray[k].xVar = circleArray[k].origin[1];
		}
		if (circleArray[k].xVar < 0 || circleArray[k].svgElement.offsetTop < 0) {
			circleArray[k].xVar = circleArray[k].origin[0];
			circleArray[k].xVar = circleArray[k].origin[1];
		}
/*
		if (circleArray[k].xVar > circleArray[k].destination[0] || circleArray[k].yVar > circleArray[k].destination[1]) {
			circleArray[k].xVar = circleArray[k].origin[0];
		}
*/
		
		circleArray[k].move(circleArray[k].xVar, circleArray[k].yVar);
		
	}
	
	myWorker.postMessage(new Date().getTime()+2);
}

function onError(e) {
	console.log("Error : [" + e.filename + ", line " + e.lineno + "] " + e.message);
}

/* var sInter = setInterval(animate, 100); */

var myWorker = new Worker("worker.js");
myWorker.onmessage = animate;
myWorker.onerror = onError;
myWorker.postMessage(new Date().getTime()+10);


