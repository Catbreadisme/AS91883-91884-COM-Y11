// This script controls the canvas

// Size of the canvas
const WIDTH = 800;
const HEIGHT = 800;




// Get the canvas element from html
const doc = document.getElementById("mainCanvas")

// Set the canvas to be the same size as the WIDTH and HEIGHT consts
console.log(doc)
doc.setAttribute("width", WIDTH); 
doc.setAttribute("height", HEIGHT);

var ctx; // Canvas context variable

// Movement variables (temp), see input.js
let xPosition = 0;
let yPosition = 0;
let xSpeed = 1;
let ySpeed = 1;
let pots;
let gameActive;



// Start the canvas
window.onload = canvasStart


class plantPot {
  constructor(xPosition, yPosition, isDraggable){
    this.xPosition = xPosition
    this.yPosition = yPosition
    this.draggable = isDraggable
    this.image = new Image
  }
}

class hotBarClass {
    constructor(hotBarSlot, xPos/* , item */){
      this.hotBarSlot = hotBarSlot
      //this.item = item
      this.selected = false
      this.colour = '#000000'
      this.xSize = 20
      this.ySize = 20
      this.xPos = xPos
      this.yPos = 780
    }

}

let hotBarSlot1 = new hotBarClass(1, 60)
let hotBarSlot2 = new hotBarClass(2, 80)

let hotBarSlots = [hotBarSlot1, hotBarSlot2]

let pot1 = new plantPot(0, 0, true)
let pot2 = new plantPot(0, 150, true)
let pot3 = new plantPot(150, 0, true)
let pot4 = new plantPot(200, 200, true)
let pot5 = new plantPot(210, 290, true)

let plantPots = [pot1, pot2, pot3, pot4, pot5]

plantPots[3].image.src = 'images/placeholder.png'
plantPots[0].image.src = 'images/placeholder.png'
plantPots[1].image.src = 'images/placeholder.png'
plantPots[2].image.src = 'images/placeholder.png'

let tempImg = new Image;
tempImg.src = 'images/test.png'

//pot1Image = new Image


function canvasStart() {
    ctx = doc.getContext("2d") // Get the canvas element
    gameActive = true

    fps = setInterval(canvasUpdate, 0.6) //The amount of times the canvas is called in a second. (Currently 60Fps)

    moveStart() // Starts Movement Event Listners
    for (pots = 0; pots < plantPots.length; pots++){
      console.log("Start positions ", "X", plantPots[pots].xPosition, "Y", plantPots[pots].yPosition)
    }

    
    
}


// Updates 60 times per seconds, see fps
function canvasUpdate() {

    ctx.clearRect(0, 0, WIDTH, HEIGHT)

    ctx.fillStyle = "black"
    ctx.fillRect(plantPots[4].xPosition, plantPots[4].yPosition, xSize, ySize)

    ctx.fillStyle ="lightblue" // Sets colour to blue
    //ctx.fillRect(xPosition, yPosition, xSize, ySize) // Creates the square

    if(drawSeed){
      ctx.drawImage(tempImg, plantPots[seedId].xPosition, plantPots[seedId].yPosition, xSize, ySize)
    }
    
    for (let i = 0; i < 4; i++){
      ctx.drawImage(plantPots[i].image, plantPots[i].xPosition, plantPots[i].yPosition, xSize, ySize)

      //ctx.strokeStyle = "rgb(0,255,0)"
      //ctx.strokeRect(plantPots[i].xPosition, plantPots[i].yPosition +20, xSize, ySize -20);
    }
    for (let i = 0; 0 < 3; i++){
      ctx.fillStyle = hotBarSlots[i].colour
      ctx.fillRect(hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
    }
   
    
    
      // Runs the movetest function, see input.js
      
    }