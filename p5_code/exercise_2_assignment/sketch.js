 
 //face 
 
let lxo = 200;
let lyo = 200;

let topHeadX;
let topHeadY = lyo + 100.5;

let faceTwo = false
let faceTwoX = -1
let faceTwoY = -1

//


//2
 let b;
  let k;
  let value = 0
  let fValue = 0
  let mFlash = 0

function preload() {
  // text
  asphyxia = loadFont('assets/asphyxia_deluxia.ttf')
}


  function setup() { 
  createCanvas(600, 600);

  // Images must be in a "assets" directory to load correctly
    i2 = loadImage("assets/scope111.png");
    i3 = loadImage("assets/muzzleFlash.png")

  rectMode(CORNER);

  } 


  function draw() { 

  background(20);


face(240, 180)


//spawn second face
if (keyIsPressed && key === 'x'){
  
  if (faceTwoX < 0){
    faceTwoX = random(50, 500)
    faceTwoY = random(50, 500)
  console.log('faceTwo Spawned')
  }
 
} 


if(faceTwoX >=0){

  face(faceTwoX, faceTwoY);

}





// muzzle flash
if (mouseIsPressed && value == 255) {
    imageMode(CENTER);
    image(i3, mouseX, mouseY, random(1000,1800), random(1000, 1800));
    
    colorMode(RGB);
    fill(255, 255, 255, 60);
    square(0, 0, 600)
        


}

// scope
let constrainX = constrain(mouseX, 0, 600)
let constrainY = constrain(mouseY,0, 600 )


if (value == 255) {
      imageMode(CENTER), 
  image(i2, constrainX, constrainY, 1800, 1800);

}


 if (key == 'b' || key == 'B') {

    face(100, 100)

    console.log("RRAAAAAH ITSA B ITSB ITSB " );

  }


//text

//bang text
if (mouseIsPressed && value == 255) {

      colorMode(HSB);
    fill(random(255), random(255), random(255))
    colorMode(RGB)
    stroke(50)
    textFont(asphyxia)
    textSize(random(400))

    text("BANG", random(50), random(600) )

    noStroke()
}
} /////////////////////////////////////////////////// draw ends



function keyPressed() {

console.log(key)

  //toggle 
  if (key == 's' || key == 'S') {

    if (value == 0){

      console.log (value)
// noCursor()

      value = 255;
      
    } else {
  
      console.log (value)
      
      value = 0;

    }

  }

}




///////////////////////////////////////////////////////////// FACE CODE

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


 // ------------------------face end
}


