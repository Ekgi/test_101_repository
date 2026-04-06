
let lxo = 200;
let lyo = 200;

let topHeadX;
let topHeadY = lyo + 100.5;


function setup() {
  createCanvas(600,600);
  background(0);
  noStroke();
}

function draw() {
  background(0);

backgroundCircle(); 
face(250, 200)



}   
/////////////////////////////////////////////////DRAW ENDS



function face (lxo, lyo) {
// brain
fill(242, 157, 217);
circle(60 + lxo, 60 + lyo,300);
  // brain shading
fill(201, 129, 180);
circle(60 + lxo, 60 + lyo,220);


// lower half of head
fill(136, 168, 96);
arc(50 + lxo, 100 + lyo, 400, 400, 94, 4, OPEN);

line(50 + lxo, 100 + lyo, 400)
noStroke();

//top head + movement
  if ( mouseX >= lxo - 10 && mouseX <= lxo + 100 && mouseY <= lyo + 50)  {
  // if ( mouseX >= 190 && mouseX <= 300 && mouseY <= 250)

    topHeadY = constrain(mouseY + 50, lyo , lyo + 200);

    // topHeadY = constrain(topHeadY - lyo, lyo + 40, lyo + 160)
    

  }

topHead(lxo, lyo);




//mouth
fill(255, 255, 255);
rect(-35 + lxo, 160 + lyo,160,66,20);
//mouth fill
fill(28, 48, 22);
rect( lxo + -35, lyo + 184, 160 ,20, );


//nose
fill(58, 79, 58);
triangle(lxo + 92, lyo + 140, lxo + 6, lyo + 140, lxo + 47, lyo + 52);

//fill(136, 168, 96);

fill(136, 168, 96);
triangle(lxo + 92, lyo + 30, lxo + 6, lyo + 30, lxo + 47, lyo + 100);

fill(136, 168, 96);
triangle(lxo + 19, lyo + 140, lxo + 75, lyo + 140, lxo + 47, lyo + 120);


//scar
stroke ('green');
line(lxo - 20, lyo + 115, lxo + 60, lyo -7);
noStroke(0);


//eye left
fill(58, 79, 58);
ellipse(-30 + lxo, 50 + lyo,55,66);

fill(58, 100, 58);
ellipse(-30 + lxo, 50 + lyo,33,44);


//eye right
strokeWeight(4)
stroke(58, 79, 58);
noFill(58, 79, 58);
// circle(120 + lxo, 50 + lyo,55);
ellipse(120 + lxo, 50 + lyo,80,40);
noStroke();


// Bite if click while in mouth
if ( mouseX >= lxo - 35 && mouseX <= lxo + 125 && mouseY >= lyo + 160 && mouseY <= lyo + 226 && mouseIsPressed) {

fill(255, 255, 255);
rect(-35 + lxo, 160 + lyo,160,66,20);
//blood screen
fill(255, 0, 0, 150);
square(0,0, 600, );

  for (let i = 0; i < 600; i += 120) {

    for (let j = 0; j < 600; j += 120) {

      if (random(0,10) <= 1) {  
        
        splatRand = random(255) ;
        opacityRand = random(0,150);
        sizeRand = random(1, 400);

        frameRate(3);
        fill(255, 0, 0, opacityRand);
        ellipse( i+5, j+5, sizeRand, sizeRand);

      }

    }
    
  }

} else {

    frameRate(60)

}

  /////////////////////////// temporary cords
  //   textAlign(CENTER);
  // textSize(16);

  // // Display the mouse's coordinates.
  // text(`x: ${mouseX} y: ${mouseY}`, 300, 600);

////////////////////////////////////////////////


 // ------------------------face end
}



function topHead(lxo, lyo) {
  fill(136, 168, 96);
  arc(lxo + 50, topHeadY, 400, 400, 4, 94, OPEN);

  // fill(136, 168, 96);
  // arc(lxo + 50, topHeadY, 400, 400, 4, 94, OPEN);


}

function backgroundCircle(){
          // init, test ; change
  frameRate(3);
  
  for (let i = 0; i < 600; i += 20) {


    for (let j = 0; j < 600; j += 20) {
      
      rand = random(18);

      fill(rand);
      
      circle( i+10 , j+10, 30,)
      
    }
  }


}


console.log ('Completed')
   



