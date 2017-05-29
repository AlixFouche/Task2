function setup() {
	createCanvas(400, 400);
}

function draw(){
	background(240);
	fill(0, 10);
	stroke(0, 160);
	
	translate(width/2, height/2);
	
	for (var i=0; i < 30; i++) {
		push();
		rotate(i / 5);
		scale(mouseX / 100, mouseY / 100);
		triangle(10, -100, 100, 100, 0, 100);
		pop();
	}
}