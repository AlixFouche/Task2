function setup() {
  createCanvas(500,500);
  background(254,245,232);
}


function draw() {
  
  //when thinking of which order to place these shapes, the snail is a
  //collage of overlapping images. So I have to think more precisely on 
  //which shape overlays each one.
  
  //Borders
  fill(241,157,41);
  noStroke();
  rect(0,0,500,40);
  
  fill(241,157,41);
  noStroke();
  rect(0,0,37,500);
  
  fill(241,157,41);
  noStroke();
  rect(0,470,500,30);
  
  fill(241,157,41);
  noStroke();
  rect(470,0,30,500);
  
  fill(241,157,41);
  triangle(471, 230, 471, 480, 410, 480);
  noStroke();
  
  
  //triangles
  fill(241,157,41);
  triangle(37, 235, 83, 235, 37, 425);
  noStroke();
  
  //quads
  fill(241,157,41);
  quad(234, 287, 292, 280, 284, 374, 223, 372);
  noStroke();
  
  fill(241,157,41);
  quad(408, 155, 446, 183, 387, 258, 355, 235);
  noStroke();
  
   //Light orange
  fill(250,198,107);
  quad(165, 240, 237, 290, 178, 372, 105, 320);
  noStroke();
  
  //Blue rectangle
  fill(92,113,178);
  quad(57, 363, 323, 371, 319, 474, 53, 472);
  noStroke();
  
  //Lilac shape
  fill(205,153,191);
  quad(37, 40, 212, 40, 212, 98, 37, 134);
  noStroke();
 
 //Emerald Shape
  fill(3,164,131);
  quad(321, 40, 464, 31, 467, 187, 327, 150);
  noStroke();
  
  //Black Shape
  fill(13,13,13);
  quad(238, 39, 335, 115, 285, 185, 180, 116);
  noStroke();
  
  //Magenta Shape
  fill(209,96,140);
  quad(184, 110, 207, 185, 98, 290, 51, 150);
  noStroke();
  
  //Lime Green Shape
  fill(137,199,122);
  quad(322, 350, 451, 373, 431, 490, 341, 474);
  noStroke();
  
  //Red Shape
  fill(206,29,47);
  quad(355, 235, 451, 325, 340, 382, 285, 265);
  noStroke();
  
  //Middle Emerald Shape
  fill(0,162,128);
  quad(290, 175, 315, 281, 185, 255, 209, 190);
  noStroke();
}
  
 
  

  
  
  
  
  

  