
var mgr; //scene manager variable 

var watch; //computer screen

var netflix; // opening image

var onbutton; //button on third animation

function preload(){
  watch = loadImage('images/watching.png')
  netflix = loadImage('images/netflix.jpg')
  onbutton = loadImage ('images/onbutton.png')
}


function setup(){
  createCanvas(1225, 710);

  mgr = new SceneManager();

  // Preloads scenes
  mgr.addScene ( Animation1 );
  mgr.addScene ( Animation2 );
  mgr.addScene ( Animation3 );

  mgr.showNextScene(); //to call "next scene" later on 

}

function draw(){
  mgr.draw(); // calls animations
}

function keyPressed(){
  mgr.keyPressed(); // calls key pressed
}

function mousePressed(){
  mgr.mousePressed(); //calls mouse pressed
}

// =============================================================
// =                         BEGIN SCENES                      = 
// =============================================================


function Animation1()
{
    
    this.draw = function(){
        background (0);
        imageMode (CENTER);
        push();
        tint(255, 60); //slightly fades background
        image(netflix, 613, 250, netflix.width/1.2, netflix.height/1.2); //background image of shows
        pop();
        textSize(75);
        textFont('Bangers'); //imported Google font
        textAlign (CENTER);
        fill (255, 0, 0);
        text("The Most Popular Shows on Netflix by State", 595, 265); //title
        textSize (35);
        text("Press right arrow key to move forward -> \n", 613, 510); //directions to move along scenes
    }

    this.keyPressed = function(){
      if (keyCode === RIGHT_ARROW) { //code to move along scenes, press right arrow key
        this.sceneManager.showNextScene();
      } 
    }
}


function Animation2()
{
 
  this.draw = function(){
    background (211, 211, 211); //grey background in computer
    imageMode (CENTER);
    push();
    image(watch, 613, 355, watch.width*1.3, watch.height*1.3); //computer image
    pop();
    fill (0);
    textSize(65);
    push();
    stroke('red'); //stroke around the text
    strokeWeight(3);
    text("Click on each state's", 540, 250); //directions for what to do on map
    text("abbreviation to see!\n", 540, 330);
    pop();

  }
  
  this.keyPressed = function(){
    if (keyCode === RIGHT_ARROW) { //to move to next scene
      this.sceneManager.showNextScene();
    } 
  }
}


function Animation3()
{
  
  this.draw = function(){
    background(225);
    imageMode (CENTER);
    fill(0);
    textSize(65);
    text("Now turn on the TV!", 613, 100);
    textSize(35);
    text("Click the on-button below\n", 613, 140) //directions for user
    link = image(onbutton, 613, 400, onbutton.width/1.2, onbutton.height/1.2); //button image

  }

  this.mousePressed = function(){
    var distance = dist (mouseX, mouseY, 613, 400); //distance between mouse and image coordinates
    if (distance < onbutton.width/4) { //mouse is pressed only works if user clicks on image
    window.open("https://sarahperrin10.github.io/finalprojectmap/"); //link to map on github
    }
  }

}

 

  


