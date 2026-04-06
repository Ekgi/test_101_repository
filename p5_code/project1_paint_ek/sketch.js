

let currentkey = '1';
let bgc ;
let gkcount;
let backgroundSwap = false;

let strokeSize = 10;
let strokeLength = 100;
let strokeColor= 0;

let stripeFlip = 1

function setup() {
    createCanvas(900, 800);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
}


function draw() {
  
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}


function drawChoice() {

  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // Thick black line
 // let k = color(0);
  drawline(strokeColor, mouseX, mouseY, pmouseX, pmouseY);
  break;

case '2':
  console.log("2");  // Thick Red Line
  drawline(color('red'), mouseX, mouseY, pmouseX, pmouseY);
  break;
  
case '3':                                                                  
  console.log("3");  //STIPRES                              //////////////// custom
  ekStripe(strokeColor, mouseX, mouseY, pmouseX, pmouseY )
  break;

  case '4':
  console.log("4");// Stripe NOISE BnW                  //////////////// custom
  ekStripeNoise(mouseX, mouseY, pmouseX, pmouseY)
  break;

case '5':
  console.log("5");   // rainbow stripes                         /////////////CUSTOM
  ekStripeRainbow( mouseX, mouseY, pmouseX, pmouseY);

  if (gkcount > 50 ) {
      // resetting the size
      gkcount = 1; 
  } else {
      // making bigger
      gkcount+= .5;
  }
 break;


case '6':
  console.log("6");  // Rainbow star noise                    //////////////// custom
  ekStripeRainbowNoise(mouseX, mouseY, pmouseX, pmouseY);
  break;



 case '7':
    console.log("7");  // Circles              /////////////////////// CUSTOM
    ekCircles(mouseX, mouseY,)
  break;

  case '8':
    console.log("8");     // SQUARES                //////////////// custom
ekSquares( mouseX, mouseY,);
  break;

  case '9':
    console.log("9");       //Squares  //////////////// custom
ekOpacity(mouseX, mouseY)
break;


case 'e':
  console.log("e");  // eraser with bgc
  eraser(bgc,mouseX, mouseY,strokeSize+15);
   break;



default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline(k,  lx, ly,  px, py) {
  
  strokeWeight(strokeSize);
  stroke(k);
  line(lx, ly, px, py);
  // console.log(mouseX);
  // console.log(pmouseX);
}


function ekStripe(strokeColor, lx, ly,  px, py) {    /////////////////    STRIPES BNW

 //// Stable 45 degree line flipped right

  strokeWeight(strokeSize - 9);
  stroke(strokeColor);

   line(lx  , ly , lx - 100 * stripeFlip , ly - 100);  //// Stable 45 degree line
  //  line(lx  , ly , lx + 100 , ly - 100);  //// Stable 45 degree line flipped right

  // line(lx  , ly , lx - 100 , ly );         ////

  // line(lx  , ly , lx - 100 , ly );         //// Stable horizontal line.
 
    // line(lx , ly , px , py - 100);         //// wobbly verticle line

  // console.log(mouseX);
  // console.log(pmouseX);
}


function ekStripeNoise( lx, ly,  px, py) {    /////////////////////   SRTIPES NOISE

  strokeWeight(strokeSize - 9);
  stroke(strokeColor);
  // line(lx  , ly , lx - 100 , ly );         ////

  // line(lx  , ly , lx - 100 , ly );         //// Stable horizontal line.
    line(lx + random(100)  , ly - random(100) , lx - random(100) , ly + random(100) ); 
    line(lx - random(-100)  , ly + random(70) , lx + random(-100) , ly - random(100) ); //// Stable 45 degree line
    // line(lx , ly , px , py - 100);         //// wobbly verticle line

  console.log(mouseX);
  console.log(pmouseX);
}



function ekStripeRainbow( lx, ly,  px, py) {    //////////////////////////////////    STRIPES RAINBOW
  strokeWeight(strokeSize - 9);
  stroke(random(255), random(255), random(255));
  // line(lx  , ly , lx - 100 , ly );         ////

  // line(lx  , ly , lx - 100 , ly );         //// Stable horizontal line.
    line(lx  , ly , lx - 100 * stripeFlip , ly - 100);  //// Stable 45 degree line
    // line(lx , ly , px , py - 100);         //// wobbly verticle line

  console.log(mouseX);
  console.log(pmouseX);
}

function ekStripeRainbowNoise( lx, ly,  px, py) {    //////////////////////////////////   RAINBOW NOISE
  strokeWeight(strokeSize - 8);
  stroke(random(255), random(255), random(255));

    line(lx + random(120)  , ly - random(120) , px - random(120) , py + random(120) ); 
    line(lx - random(-120)  , ly + random(120) , px + random(-120) , py - random(120) );
  // line(lx  , ly , lx - 100 , ly );         ////

  // line(lx  , ly , lx - 100 , ly );         //// Stable horizontal line.
    // line(lx  , ly , lx - 100 , ly - 100);  //// Stable 45 degree line
    // line(lx , ly , px , py - 100);         //// wobbly verticle line

  console.log(mouseX);
  console.log(pmouseX);
}


function ekSquares( lx, ly,) {    ///////////////////////////////////////////////////   SQUARES
  strokeWeight(4);
  stroke(random(255), random(255), random(255));

  rectMode(CENTER);
    fill(random(255), random(255), random(255), random(255))  
    rect(lx - random(255)+strokeSize*5  , ly + random(255)+strokeSize*5 ,random(255)+strokeSize*5 , random(255)+strokeSize*5 ); 
    // rect(lx - random(-70)  , ly + random(70) , px + random(-70) , py - random(70) );
  // line(lx  , ly , lx - 100 , ly );         ////

}


function ekOpacity(lx, ly, px, py){ ///////////////////////////////////////////////////     OPACITY

  noStroke();
    for (let i = 0; i < 90; i+=20) {
      colorMode(RGB)
      fill(strokeColor, strokeColor, strokeColor, random(15));
        ellipse(lx, ly, random(200) + strokeSize*10, random(200) + strokeSize*10);
    
    }

    //  for (let i = 0; i < 90; i+=20) {
    //     let r = random(-80,80);
    //   fill(color(random(100,200),90,0,34));
    //   ellipse(lx + i + r,ly + r,10,10);
    // }


}

function ekCircles( lx, ly,) {    ///////////////////////////////////////////////////   CIRCLES

  strokeWeight(4);
  stroke(random(255), random(255), random(255));
  noStroke()
    fill(random(255), random(255), random(255), random(100))  
    ellipse(lx + 10  , ly + 10 , random(300), random(300) ); 
    // rect(lx - random(-70)  , ly + random(70) , px + random(-70) , py - random(70) );
  // line(lx  , ly , lx - 100 , ly );         ////

}


// function ekOpacityBrush(k, a, lx, ly){                    //////////////////// old opacity frim spiddle?

//     let r = random(-40,40);

//   noStroke()
//   for (let i = 0; i < 90; i+=20) {
//     colorMode(RGB)
//     fill(k, k, k,  a);
//     ellipse(lx + i + r,ly + r,80,80);

//   }

// }





function eraser( k, lx, ly, sz) { ////////////////////////////////////////////// ERASER
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);

}


function toggleBackground() {   ////////////////////////////////////////////// TOGGLE BACKGROUND
    if (backgroundSwap == true) {
        // was dark → switch to light
        bgc = color(255);
        background(255);
        backgroundSwap = false;
    } else {
        // was light → switch to dark
        bgc = color(0);
        background(0);
        backgroundSwap = true;
    }

}

///




function keyPressed() {

  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }else if (key == 'b' || key == 'B') {
        toggleBackground();

  } else if (key === '=') {
    strokeSize = strokeSize + 1;
    console.log(strokeSize)
  } else if (key === '-') {
    strokeSize = max(1, strokeSize - 1);
   console.log(strokeSize)

  } else if (key === 'w' || key ==='W') {
      strokeColor = 255;
      console.log(strokeColor)
  } else if (key === 's' || key === 'S') {
    strokeColor = 0;
  console.log(strokeColor)
  
  }else if(key === 'f' || key === 'F'){
    stripeFlip = stripeFlip * -1;   
  
  }else if(key === 'e' || key === 'E'){
  }

}






