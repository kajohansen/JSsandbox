var timer;
var timeout;

timer = function (endDate) {
	endDate = new Date(endDate);
	var currentDate = new Date();
    var millisecondDiff = endDate.getTime() - currentDate.getTime(); 
    
    timeout = setTimeout(function() {
            timer(endDate);
    }, 1);

	if (millisecondDiff <= 0) 
	{
		postMessage(millisecondDiff);
		clearTimeout(timeout);
	} 
}

function convert(e) {
	var endDate = e.data;
	self.timer(endDate);
}

/* addEventListener("message", convert, true); */
this.onmessage = convert;
