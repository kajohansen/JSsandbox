/* ***** BIG SVG circle ***** */
	svgBigElement = document.createElementNS("http://www.w3.org/2000/svg","svg");
	svgBigElement.setAttribute("width", 500);
	svgBigElement.setAttribute("height", 500);
	svgBigElement.setAttribute("id", "svgBig");
	svgBigElement.centerX = window.innerWidth / 2;
	svgBigElement.centerY = window.innerHeight / 2;
	svgBigElement.style.position = "absolute";
	svgBigElement.style.border = "1px dotted black";
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
	this.xVar = svgBigElement.centerX - 4;
	this.yVar = svgBigElement.centerY - 4;
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

/* var myCircle = new svgParticle(); */
var circleArray = new Array();

var angle = 360;
var radius = 250;
var circumfrance = (Math.PI*2) * radius;
var oneRadian = circumfrance / 360;

circleArray.push(new svgParticle());
var x = (svgBigElement.centerX + 250) * Math.cos(oneRadian * angle);
var y = (svgBigElement.centerY + 250) * Math.sin(oneRadian * angle);
/* y += 504;  */
console.log("Angle is : " + angle + "\nX point on Circle : " + x + "\nY point on Circle : " + y);
console.log("Circumfrance : " + circumfrance); 
console.log("One radian : " + oneRadian); 
circleArray[0].setDestination(x, y);
circleArray[0].instantiate();
/* circleArray[0].move(50, 50); */

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

