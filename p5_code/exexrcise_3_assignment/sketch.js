
  let waverot = 0;
  let wavedir = 0;
  let counterSpin = 0;
  let speedx, speedy, lox, loy;


function setup() {
  createCanvas(500,500);
  background(20);
  fill(20);
  speedx = random(-5, 5);
  speedy = random(-5, 5);
  lox = height / 2;
  loy = width / 2;
  wavedir = 1
}

function draw() {
background(0,30);
noStroke();  

person4 (color('darkgrey'), lox, loy, counterSpin, .3);
person1(color('yellow'), 100, 100, 0, );
person2(color('green'),300, 100, 0, .7, waverot);
person3(color('teal'), 200, 300, 0, 1, waverot);

//rotate wave

    counterSpin += 3
    waverot+=wavedir;
    
    if (waverot < -20 || waverot > 60) {
        wavedir = -wavedir;
    }

    // bounce
    if ((loy < 0) || (loy > height)) {
        speedy = -speedy;
    }
        if ((lox < 0) || (lox > width)) {
        speedx = -speedx;
    }
    lox += speedx;
    loy += speedy;

    
}



function person1(c, lx,ly,rot,sc){                          // assembly starts here

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) );  // rotate read in radians
  scale(sc);  // multiples or perectages

  head(color(c), 0, 0, 0, 1)

  //  LEFT LEG
  leg(color(c),18, 70, 0, 1);
  legLower(color(c),18,100, 0, 1);

  //  RIGHT LEG
  leg(color(c),-18,70, 0, 1);
  legLower(color(c),-18,100, 0, 1);


  //  PELVIS
  pelivs(color(c), 0, 0, 0, 1);
  upperBody(color(c), 0, -14, 0, 1)

  body(color(c), 0,0,0,1);

  //  LEFT ARM
  armUpper(color(c), 35, -26, 0, 1)
  forearm(color(c), 35, 23, 0, 1)

  //  RIGHT ARM
  armUpper(color(c), -35, -26, 0, 1)
  forearm(color(c), -35, 23, 0, 1)


  pop(); // end T


}



function person2(c,lx,ly,rot,sc, tr){                          // assembly starts here 2

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) );  // rotate read in radians
  scale(sc);  // multiples or perectages

  head(color(c), 0, 0, 0, 1)

  //  LEFT LEG
  leg(color(c),18, 70, 0, 1);
  legLower(color(c),18,100, 0, 1);

  
  //  RIGHT LEG
  leg(color(c),-18,70, 0, 1);
  legLower(color(c),-18,100, 0, 1);

  //  PELVIS
  pelivs(color(c), 0, 0, 0, 1);
  upperBody(color(c), 0, -14, 0, 1)

  body(color(c), 0,0,0,1);

  //  LEFT ARM
  armUpper(color(c), 35, -26, 0, 1)


  //  RIGHT ARM
  armUpper(color(c), -35, -26, 45, 1)
  forearm(color(c), -72, 5, 130, 1)

  //WAVE LEFT FOREARM
  ekWaveForearm(color(c),35, 23, tr ); // wave arm

  pop(); // end T


}



function person3(c, lx,ly,rot,sc,tr){                          // assembly starts here 3

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) );  // rotate read in radians
  scale(sc);  // multiples or perectages

  head(color(c), -10, 0, 40, 1)

  //  LEFT LEG
  leg(color(c),-45, 70, 40, 1);
  // legLower(color(c),18,100, 0, 1);


  //  RIGHT LEG
  // legLower(color(c),-18,100, 0, 1);
  leg(color(c),-75, 50, 40, 1);

  //  PELVIS
  pelivs(color(c), -10, 0, 40, 1);
  upperBody(color(c), 0, -14, 40, 1)

  body(color(c), -10,0,40,1);

  //  LEFT ARM
  // armUpper(color(c), 35, -26, 0, 1)
  // forearm(color(c), 35, 23, 0, 1)

  //  RIGHT ARM
  armUpper(color(c), -35, -26, 40, 1)
  forearm(color(c), -65, 10, 40, 1)

  //WAVE PART
  ekWaveLegLower(color(c), -100, 80, tr) //
  ekWaveLegLower(color(c), -70, 100, tr) //left
  
  pop(); // end T

}

function person4(c, lx,ly,rot,sc){                          // assembly starts here

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) );  // rotate read in radians
  scale(sc);  // multiples or perectages

  head(color(c), 0, 0, 0, 1)

  //  LEFT LEG
  leg(color(c),35, 65, -40, 1);
  legLower(color(c),60,95, -40, 1);

  //  RIGHT LEG
  leg(color(c),-35, 65, 40, 1);
  legLower(color(c),-60,95, 40, 1);


  //  PELVIS
  pelivs(color(c), 0, 0, 0, 1);
  upperBody(color(c), 0, -14, 0, 1)

  body(color(c), 0,0,0,1);

  //  LEFT ARM
  armUpper(color(c), 35, -26, -120, 1)
  forearm(color(c), 75, -50, -120, 1)

  //  RIGHT ARM
  armUpper(color(c),  -35, -26, 120, 1)
  forearm(color(c), -75, -50, 120, 1)

  pop(); // end T


}


  //  HEAD AND NECK
  function head(c,lx,ly,rot,sc){
  
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc)
  //neck?
  rectMode(CENTER);
  fill(color('grey'))
  rect(0,-40,18,26)

  //  head
  fill(c)
  ellipse(0,-65,30,40)

  pop(); //end

}




//  body THE ANCHOR                               
function body(c,lx,ly,rot,sc){
  
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc)

  fill(c)
  ellipse(0,0,50,70)
  
  //stomach joint
  fill(color('grey'))
  ellipse(0,16,40,40)

  pop(); //end
}

function upperBody(c,lx,ly,rot,sc){
  
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc)

  //actual pelivis
  fill(c)
  ellipse(0,0,70,50)

  pop(); //end

}

//   PELIVS
function pelivs(c,lx,ly,rot,sc){
  
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc)

  //hip joints
  fill(color('grey'))
  ellipse(10,40,30,30)

  fill(color('grey'))
  ellipse(-10,40,30,30)

  //actual pelivis
  fill(c)
  ellipse(0,32,40,45)

  pop(); //end

}

//  LEG
function leg(c,lx,ly,rot,sc){

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) );  // rotate read in radians
  scale(sc);  // multiples or perectages

  // upper leg
  fill(c);
  ellipse(0,0,22,70)



  pop(); // end T
}

//  LEG LOWER
function legLower(c,lx,ly,rot,sc){

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) );  // rotate read in radians
  scale(sc);  // multiples or perectages

  
  fill(c);
  ellipse(0,35,17,60)

  fill(color('grey'))
  ellipse(0,0,18,24)

  rectMode(CENTER)
  fill(color('grey'))
  rect(0,68,25,15,20,20,0,0)
  
  pop(); // end T
}


function armUpper(c,lx,ly,rot,sc){

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) );  // rotate read in radians
  scale(sc);  // multiples or perectages

  // upper arm
  fill(c);
  ellipse(0,26,18,40)
  
  // shoulder
  fill(color('grey'))
  ellipse(0,0,18,20)

  pop(); // end T
}

function forearm(c,lx,ly,rot,sc){

  push();  // start T
  translate(lx,ly);
  rotate( radians(rot) );  // rotate read in radians
  scale(sc);  // multiples or perectages

  // forearm
  fill(c);
  ellipse(0,22,18,40)
  
  // elbow
  fill(color('grey'))
  ellipse(0,0,14,15)

  // hand
  fill(c)
  rect(-4, 32, 9, 25)

  pop(); // end T
}


  function ekWaveForearm(c, lx, ly, rot) {
  push();
  translate(lx, ly);
  rotate(radians(rot));

  rotate(radians(180))
  forearm(c, 0, 0, 0, 1);
  pop();
}

  function ekWaveLegLower(c, lx, ly, rot) {
  push();
  translate(lx, ly);
  rotate(radians(rot));

  legLower(c, 0, 0, 0, 1);
  pop();
}


// function transformTemp(lx,ly,rot,sc){

//   push();  // start T
//   translate(lx,ly);
//   rotate( radians(rot) );  // rotate read in radians
//   scale(sc);  // multiples or perectages
//   fill("white");
//   ellipse(100,100,40,70); // anchor
//   pop(); // end T
// }





