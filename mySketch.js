function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
	line(windowWidth/2, 0, windowWidth/2, windowHeight); // the two lines that separate the quadrants
	line(0, windowHeight/2, windowWidth, windowHeight/2);
}

function draw() {
  if (mouseX <= windowWidth/2 && mouseY <= windowHeight/2) { // top-left quadrant
    fill(0, 255, 0); 
		noStroke();
  	ellipse(mouseX, mouseY, 20, 20);  // green circles
  } else if (mouseX <= windowWidth/2 && mouseY >= windowHeight/2) { // bottom-left quadrant
    fill(255, 0, 0);
		noStroke();
		rectMode(CENTER);
  	rect(mouseX, mouseY, 20, 20);  // red squares
  } else if (mouseX >= windowWidth/2 && mouseY <= windowHeight/2) { // top-right quadrant
		stroke(0, 0, 255);
		strokeWeight(3);
  	line(pmouseX, pmouseY, mouseX, mouseY);  // blue lines
  } else {
		stroke(255, 255, 0);
		strokeWeight(3);
  	line(pmouseX, pmouseY, mouseX, mouseY);  // yellow lines
	}
  
}

function keyPressed() {
  background(255); // clears the canvas
	stroke(0);
	strokeWeight(1);
	line(windowWidth/2, 0, windowWidth/2, windowHeight); // redraws the two lines
	line(0, windowHeight/2, windowWidth, windowHeight/2);
}
