
var r = 0;
var g = 100;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(255,255);

}


function draw(){
background(r,g,b);

fill("blue");
  var ellipse1 =  ellipse(mouseX,mouseY,40,40);

  r= mouseX;
  g=mouseY;
  b=(g+r)/2;


  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}
