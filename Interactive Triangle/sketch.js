function setup() {
	createCanvas(400, 400);
}

function draw(){
	background(240);
	
	translate(width/2, height/2);
	scale(mouseX / 300, mouseY / 300);

fill(50, 500, 300);
	triangle(0, -100, -100, 100, 100, 100);
	
}

