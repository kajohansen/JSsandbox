
function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function setSteps(endX, endY, startX, startY) {
	var stepArray = new Array();
	
	for (i = 1; i <= 20; i++) {
		var stepDX = (((endX - startX) / 20) * i) + 300;
		var stepDY = (((endY - startY) / 20) * i) + 300;
		
		var step = [stepDX, stepDY];
		stepArray.push(step);
	}
	return stepArray;
}

var line = {
	// Index - Elements
	startX : 300,
	startY : 300,
}

function drawLines() {
	var localStepArray = new Array();

	for (var i = 0; i < 6; i++) {
		var my = line;
		my.color = get_random_color();
		my.endX = 300 + 250 * Math.cos(i);
		my.endY = 300 + 250 * Math.sin(i);
		my.stepArray = setSteps(my.endX, my.endY, my.startX, my.startY);
		localStepArray.push(JSON.stringify(my));
	}
	
	postMessage(localStepArray);
}

self.onmessage = drawLines;
