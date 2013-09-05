var centerX = 300;
var centerY = 300;

/* ***** SVG Particle ***** */
function svgParticle() {
	this.svgElement = document.createElementNS("http://www.w3.org/2000/svg","svg");
	this.svgElement.setAttribute("width", 19);
	this.svgElement.setAttribute("height", 19);
	this.svgElement.style.position = "absolute";
	this.svgElement.style.left = (centerX - 7) + "px";
	this.svgElement.style.top = (centerY - 7) + "px";
	this.svgCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
	this.svgCircle.setAttribute("fill", "#76D1F4");
	this.svgCircle.setAttribute("stroke", "#F7941E");
	this.svgCircle.setAttribute("stroke-miterlimit", 10);
	this.svgCircle.setAttribute("r", 8);
	this.svgCircle.setAttribute("cx", 9);
	this.svgCircle.setAttribute("cy", 9);
	this.svgElement.appendChild(this.svgCircle);
}
/* ---------------------- */

svgParticle.prototype.instantiate = function() 
{
	document.getElementsByTagName("body")[0].appendChild(this.svgElement);
}

svgParticle.prototype.move = function(x, y) 
{
	this.svgElement.style.left = x;
	this.svgElement.style.top = y;
}

/* var myCircle = new svgParticle(); */
var circleArray = new Array();

for (var i = 0; i < 45; i++) {
	var newParticle = new svgParticle();
	newParticle.instantiate();	
	circleArray.push(newParticle);
}



