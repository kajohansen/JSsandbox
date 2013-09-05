
function animate() {
	
	if (globalStepResponse) {
		for (var i = 0; i < globalStepResponse.length; i++) 
		{
			
			var line1 = JSON.parse(globalStepResponse[i]);
			
			for (j = 0; j < line1.stepArray.length; j++) 
			{
				circleArray[i].move(line1.stepArray[j][0], line1.stepArray[j][1]);
			}
		}
	}
			timeWorker.terminate();
/* 	timeWorker.postMessage(new Date().getTime()+100); */
}



function onError(e) {
	console.log("Error : [" + e.filename + ", line " + e.lineno + "] " + e.message);
}


var timeWorker = new Worker("timeWorker.js");
timeWorker.onmessage = animate;
timeWorker.onerror = onError;
timeWorker.postMessage(new Date().getTime()+100);

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
	
}
init();

document.getElementsByTagName("footer")[0].onclick = function() {
	console.log("Terminating");
	timeWorker.terminate();
	lineWorker.terminate();
}
