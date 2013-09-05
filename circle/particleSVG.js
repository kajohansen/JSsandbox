var centerX = 300;
var centerY = 300;

/* ***** SVG Particle ***** */
function svgParticle() {
	this.svgElement = document.createElementNS("http://www.w3.org/2000/svg","svg");
	this.svgElement.setAttribute("width", 19);
	this.svgElement.setAttribute("height", 19);
	this.svgElement.style.position = "absolute";
	this.svgElement.style.left = centerX + "px";
	this.svgElement.style.top = centerY + "px";
	this.svgCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
	this.svgCircle.setAttribute("fill", "#76D1F4");
	this.svgCircle.setAttribute("stroke", "#F7941E");
	this.svgCircle.setAttribute("stroke-miterlimit", 10);
	this.svgCircle.setAttribute("r", 8);
	this.svgCircle.setAttribute("cx", 9);
	this.svgCircle.setAttribute("cy", 9);
	this.svgElement.appendChild(this.svgCircle);
	this.xVar = centerX;
	this.yVar = centerY;
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
	this.origin = [centerX, centerY]; 
}

/* var myCircle = new svgParticle(); */
var circleArray = new Array();

var angle = 91;

circleArray.push(new svgParticle());
var x = centerX + 250 * Math.cos(angle);
var y = centerY + 250 * Math.sin(angle);

console.log("Angle is : " + angle + "\nX destination : " + x + "\nY destination : " + y);
circleArray[0].setDestination(x, y);
circleArray[0].instantiate();
/* circleArray[0].move(x, y); */

/*
circleArray.push(new svgParticle());
var x = ((svgBigElement.offsetLeft + 250) + 250) * Math.cos(1);
var y = ((svgBigElement.offsetTop + 250) + 250)  * Math.sin(1);
circleArray[0].setDestination(x, y);
circleArray[0].instantiate();

circleArray.push(new svgParticle());
var x = ((svgBigElement.offsetLeft + 250) + 250) * Math.cos(180);
x += 480;
var y = ((svgBigElement.offsetTop + 250) + 250)  * Math.sin(180);
y += 504;
circleArray[1].setDestination(x, y);
circleArray[1].instantiate();
*/

/*
for (var i = 0; i < 360; i++) {
	circleArray.push(new svgParticle());
	var x = ((window.innerWidth / 2) + 250) * Math.cos(i);
	var y = ((window.innerHeight / 2) + 250) * Math.sin(i);
	circleArray[i].setDestination(x, y);
	circleArray[i].instantiate();
}
*/

