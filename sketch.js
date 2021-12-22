let paintR = 100;
let paintG = 100;
let paintB = 100;
let currentShape = 1;
let size = 15;
let previousState;
let stateIndex = 0;
let colorpicker
function setup() {
   createCanvas(windowWidth, windowHeight);
  frameRate(100);
  background(255);
  noStroke();
  saveState();
  drawInstructions();
}


function draw() {
print(mouseX, mouseY);
  drawClearButton();
  drawRedButton();
  drawGreenButton();
  drawBlueButton();
  drawEraseButton();
  drawShapeButtons();
  drawSizeButtons();
  drawSaveButton();
if (mouseIsPressed)
{
    if (mouseY > 36)
  {
    fill(paintR, paintG, paintB)
    if (currentShape == 1) {
    ellipse(mouseX,mouseY,size,size);
} else {
    rect(mouseX,mouseY,size,size);
}
  }
}
}

function drawEraseButton()
{
  fill(200);
  rect(250,1,125,35,20);
  fill(0);
  textSize(24);
  text("Erase",280,26);
}
function drawClearButton()
{
  fill(200);
  rect(1,1,125,35,20);
  fill(0);
  textSize(24);
  text("Clear",35,25);
}

function drawRedButton()
{
  fill(255,0,0);
  rect(130,1,35,35);
}


function drawGreenButton()
{
  fill(0,255,0);
  rect(170,1,35,35);
}
function drawShapeButtons(){
    fill(255,255,255);
  stroke(0);
  rect(380,1,35,35);
  noStroke();
  
    fill(255,255,255);
  stroke(0);
  ellipse(435,18,35,35);
  noStroke();
}
function drawSizeButtons(){
    fill(200,200,200);
  rect(460,1,35,35);
    fill(0);
  textSize(48);
  text("+",464,35);
  
    fill(200,200,200);
  rect(505,1,35,35);
  noStroke();
    fill(0);
  textSize(48);
  text("-",515,31);
  noStroke();
}
function drawBlueButton()
{
  fill(0,0,255);
  rect(210,1,35,35);
  noStroke();
}
function drawSaveButton(){
   fill(200);
  rect(545,1,125,35,20);
  fill(0);
  textSize(24);
  text("Save",577,26);
  noStroke(); 
}
function drawInstructions(){
  fill(0);
  textSize(14);
  text("Clear clears the canvas, the 3 color buttons switch your color, Erase turns on the eraser, circle ans square switch drawing shape,",10,464);
  text("The + and -  buttons adjust size, save saves canvas to your computer, and finally, ctrl+z is undo.",10,484);
    text("(press clear to close this text, it will not appear again until you restart the program.)",10,504);
}
function checkMouseWithInClearButton()
{
if(mouseX > 1 && mouseY > 1 && mouseX < 126 && mouseY < 36)
  {
    background(255);
    paintR = 100;
    paintG = 100;
    paintB = 100;
    size = 15
  }
}
function checkMouseWithInEraseButton()
{
if(mouseX > 250 && mouseY > 1 && mouseX < 373 && mouseY < 36)
  {
    paintR = 255;
    paintG = 255;
    paintB = 255;
  }
}


function checkMouseWithInRedButton()
{
if(mouseX > 130 && mouseY > 1 && mouseX < 165 && mouseY < 36)
  {
    paintR = 255;
    paintG = 0;
    paintB = 0;
  }
}


function checkMouseWithInGreenButton()
{
if(mouseX > 170 && mouseY > 1 && mouseX < 205 && mouseY < 36)
  {
    paintR = 0;
    paintG = 255;
    paintB = 0;
  }
}

function checkMouseWithInBlueButton()
{
if(mouseX > 210 && mouseY > 1 && mouseX < 245 && mouseY < 36)
  {
     paintR = 0;
     paintG = 0;
     paintB = 255;
  }
}
function checkMouseWithInSquareButton()
{
if(mouseX > 380 && mouseY > 1 && mouseX < 415 && mouseY < 36)
  {
    currentShape = 2
    print("square")
  }
}

function checkMouseWithInCircleButton()
{
if(mouseX > 419 && mouseY > 1 && mouseX < 453 && mouseY < 36)
  {
   currentShape = 1
   print("circle")
  }
}
function checkMouseWithInPlusButton()
{
if(mouseX > 460 && mouseY > 1 && mouseX < 494 && mouseY < 36)
  {
size = size + 5
  }
}
function checkMouseWithInMinusButton()
{
if(mouseX > 505 && mouseY > 1 && mouseX < 539 && mouseY < 36)
  {
   if(size>9){
     size = size - 5
   }
  }
}
function checkMouseWithInSaveButton()
{
if(mouseX > 545 && mouseY > 1 && mouseX < 674 && mouseY < 36)
  {
 saveCanvas('stupi bad picture that YOU drew not me', 'png');
  }
}


function mousePressed()
{
  saveState();
  checkMouseWithInClearButton();
  checkMouseWithInCircleButton();
  checkMouseWithInSquareButton();
  checkMouseWithInEraseButton();
  checkMouseWithInRedButton();
  checkMouseWithInGreenButton();
  checkMouseWithInBlueButton();
  checkMouseWithInPlusButton();
  checkMouseWithInMinusButton(
  
  );
  checkMouseWithInSaveButton();
}
function keyPressed(e) {
  if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
    undoToPreviousState();
  }
}
function saveState() {
  previousState = get();
}
function undoToPreviousState() {
  if (!previousState) {
    return;
  }
  background(255);
  image(previousState, 0, 0);
  previousState = null;
}

