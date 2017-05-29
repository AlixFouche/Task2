function setup() {
  createCanvas(400, 400);
	rectMode(CENTER);
	fill(50, 100);
	stroke(255, 50);
}

function draw() {
  background(240);

	var ang1 = TWO_PI * noise(0.01*frameCount + 10);		
	var ang2 = TWO_PI * noise(0.01*frameCount + 20);
	var ang3 = TWO_PI * noise(0.01*frameCount + 30);
	var rx = 60 * noise(0.01*frameCount + 40);
	var tx = 200 * noise(0.01*frameCount + 50);
	var size1 = 200 * noise(0.01*frameCount + 60);
	var size2 = 50 * noise(0.01*frameCount + 60);

	translate(width/2, height/2);
	for (var i = 0; i < 8; i++) {
		push();
		rotate(ang1 + TWO_PI * i / 8);
		translate(tx, 0);
		rect(0, 0, size1, size1);
		for (var j = 0; j < 6; j++) {
			push();
			rotate(ang2 + TWO_PI * j / 6);
			translate(rx, 0);
			rotate(ang3);
			rect(rx, 0, size2, size2);
			pop();
		}		
		translate()
		pop();
	}
}