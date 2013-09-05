var globalStepArray = new Array();
var angle = 0;

function drawSteps(e) {

	context.save();
	blank();
		
	for (var i = 0; i < e.data.length; i++) 
	{
		var line1 = JSON.parse(e.data[i]);
		bufferCanvasCtx.fillStyle = line1.color;
		
		for (j = 0; j < line1.stepArray.length; j++) 
		{
			bufferCanvasCtx.fillRect(line1.stepArray[j][0], line1.stepArray[j][1], 4, 4);
		}
	}

	context.drawImage(bufferCanvas, 0,0, canvas.offsetWidth, canvas.offsetHeight);
	
	context.restore();
}

function onError(e) {
	console.log("Error : [" + e.filename + ", line " + e.lineno + "] " + e.message);
}

var myWorker = new Worker("lineWorker.js");
myWorker.onmessage = drawSteps;
myWorker.onerror = onError;
myWorker.postMessage("init");


