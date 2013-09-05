/* ***** BIG SVG circle ***** */
	svgBigElement = document.createElementNS("http://www.w3.org/2000/svg","svg");
	svgBigElement.setAttribute("width", 500);
	svgBigElement.setAttribute("height", 500);
	svgBigElement.setAttribute("id", "svgBig");
	svgBigElement.centerX = 450;
	svgBigElement.centerY = 450;
	svgBigElement.style.position = "absolute";
	svgBigElement.style.left = svgBigElement.centerX - 250 + "px";
	svgBigElement.style.top = svgBigElement.centerY - 250 + "px";
	svgBigCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
	svgBigCircle.setAttribute("fill", "#fff");
	svgBigCircle.setAttribute("stroke", "#FF0000");
	svgBigCircle.setAttribute("stroke-miterlimit", 10);
	svgBigCircle.setAttribute("r", 250);
	svgBigCircle.setAttribute("cx", 250);
	svgBigCircle.setAttribute("cy", 250);
	svgBigElement.appendChild(svgBigCircle);
/* ---------------------- */

document.getElementsByTagName("body")[0].appendChild(svgBigElement);

/* ***** SVG circle ***** */
function svgParticle() {
	this.svgElement = document.createElementNS("http://www.w3.org/2000/svg","svg");
	this.svgElement.setAttribute("width", 19);
	this.svgElement.setAttribute("height", 19);
	this.svgElement.style.position = "absolute";
	this.svgElement.style.left = svgBigElement.centerX - 4 + "px";
	this.svgElement.style.top = svgBigElement.centerY - 4 + "px";
	this.svgCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
	this.svgCircle.setAttribute("fill", "#76D1F4");
	this.svgCircle.setAttribute("stroke", "#F7941E");
	this.svgCircle.setAttribute("stroke-miterlimit", 10);
	this.svgCircle.setAttribute("r", 8);
	this.svgCircle.setAttribute("cx", 9);
	this.svgCircle.setAttribute("cy", 9);
	this.svgElement.appendChild(this.svgCircle);
	this.xVar = svgBigElement.centerX - 9;
	this.yVar = svgBigElement.centerY - 9;
}
/* ---------------------- */

svgParticle.prototype.instantiate = function() {
	document.getElementsByTagName("body")[0].appendChild(this.svgElement);
}

svgParticle.prototype.move = function(x, y) 
{
	this.svgElement.style.left = x;
	this.svgElement.style.top = y;
}

svgParticle.prototype.setDestination = function(x, y) 
{
	this.destination = [x,y];
	this.origin = [svgBigElement.centerX - 4, svgBigElement.centerY - 4]; 
}

var circleArray = new Array();

for (var i = 0; i < 44; i++) {
	var newParticle = new svgParticle()
	var x = newParticle.xVar + 350 * Math.cos(i);
	var y = newParticle.yVar + 350 * Math.sin(i);
	newParticle.setDestination(x, y);
	newParticle.instantiate();
/* 	newParticle.move(newParticle.destination[0], newParticle.destination[1]); */
	circleArray.push(newParticle);
}



