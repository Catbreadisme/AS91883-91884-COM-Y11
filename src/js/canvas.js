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



// Start the canvas
window.onload = canvasStart


class plantPot {
  constructor(xPosition, yPosition, isDraggable, image){
    this.xPosition = xPosition
    this.yPosition = yPosition
    this.draggable = isDraggable
    this.image = image
  }
}



let pot1 = new plantPot(0, 0, true, new Image)
let pot2 = new plantPot(0, 150, true, new Image)
let pot3 = new plantPot(150, 0, true, new Image)
let pot4 = new plantPot(200, 200, true, new Image)
let pot5 = new plantPot(210, 290, true, new Image)

let plantPots = [pot1, pot2, pot3, pot4, pot5]

plantPots[3].image.src = 'images/placeholder.png'
plantPots[0].image.src = 'images/placeholder.png'
plantPots[1].image.src = 'images/placeholder.png'
plantPots[2].image.src = 'images/placeholder.png'

//pot1Image = new Image


function canvasStart() {
    ctx = doc.getContext("2d") // Get the canvas element

    fps = setInterval(canvasUpdate, 0.6) //The amount of times the canvas is called in a second. (Currently 60Fps)

    moveStart() // Starts Movement Event Listners
    for (pots = 0; pots < plantPots.length; pots++){
      console.log("Start positions ", "X", plantPots[pots].xPosition, "Y", plantPots[pots].yPosition)
    }

    
    
}


// Updates 60 times per seconds, see fps
function canvasUpdate() {

    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    
    ctx.drawImage(plantPots[3].image, plantPots[3].xPosition, plantPots[3].yPosition, xSize, ySize)

    ctx.fillStyle = "black"
    ctx.fillRect(plantPots[4].xPosition, plantPots[4].yPosition, xSize, ySize)

    ctx.fillStyle ="lightblue" // Sets colour to blue
    //ctx.fillRect(xPosition, yPosition, xSize, ySize) // Creates the square
    
    for (let i = 0; i < 3; i++){
      ctx.drawImage(plantPots[i].image, plantPots[i].xPosition, plantPots[i].yPosition, xSize, ySize)
    }
   
    
    
      // Runs the movetest function, see input.js
      
    }