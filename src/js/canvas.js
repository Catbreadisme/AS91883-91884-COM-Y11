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
    this.seedPlanted = false
    this.seedInPot = 'None'
  }
}

class hotBarClass {
    constructor(hotBarSlot, xPos/* , item */){
      this.hotBarSlot = hotBarSlot
      //this.item = item
      this.selected = false
      this.colour = '#000000'
      this.xSize = 80
      this.ySize = 80
      this.xPos = xPos
      this.yPos = 720
      this.item = 'Empty'
      this.itemType = 'Empty'
      this.hasItem = false
    }

    

}

let hotBarSlot1 = new hotBarClass(1, 40)
let hotBarSlot2 = new hotBarClass(2, 120)
let hotBarSlot3 = new hotBarClass(3, 200)
let hotBarSlot4 = new hotBarClass(4, 280)
let hotBarSlot5 = new hotBarClass(5, 360)
let hotBarSlot6 = new hotBarClass(6, 440)
let hotBarSlot7 = new hotBarClass(7, 520)
let hotBarSlot8 = new hotBarClass(8, 600)
let hotBarSlot9 = new hotBarClass(9, 680)

let hotBarSlots = [hotBarSlot1, hotBarSlot2, hotBarSlot3, hotBarSlot4, hotBarSlot5, hotBarSlot6, hotBarSlot7, hotBarSlot8, hotBarSlot9]

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

let hotBarImage = new Image;
hotBarImage.src = 'images/HotbarSlot.png'

let itemTypes = ['Seed Packet', 'Watering Can']



function canvasStart() {
    ctx = doc.getContext("2d") // Get the canvas element
    gameActive = true
    
    
    
    hotBarSlots[1].item = localStorage.getItem("storedItem2")
    hotBarSlots[2].item = localStorage.getItem("storedItem3")
    hotBarSlots[3].item = localStorage.getItem("storedItem4")
    hotBarSlots[4].item = localStorage.getItem("storedItem5")
    hotBarSlots[5].item = localStorage.getItem("storedItem6")

    hotBarSlots[1].itemType = itemTypes[0]
    hotBarSlots[1].item = 'Tomato Seed'
    hotBarSlots[1].hasItem = true
    
    fps = setInterval(canvasUpdate, 0.6) //The amount of times the canvas is called in a second. (Currently 60Fps)

    moveStart() // Starts Movement Event Listners
    for (pots = 0; pots < plantPots.length; pots++){
      console.log("Start positions ", "X", plantPots[pots].xPosition, "Y", plantPots[pots].yPosition)
    }

    //console.log(ho)
    
}


// Updates 60 times per seconds, see fps
function canvasUpdate() {
  
    ctx.clearRect(0, 0, WIDTH, HEIGHT)

    ctx.fillStyle = "black"
    ctx.fillRect(plantPots[4].xPosition, plantPots[4].yPosition, xSize, ySize)
    
    //if(){

      
    //}
    
    for (let i = 0; i < 4; i++){
      ctx.drawImage(plantPots[i].image, plantPots[i].xPosition, plantPots[i].yPosition, xSize, ySize)

      //ctx.strokeStyle = "rgb(0,255,0)"
      //ctx.strokeRect(plantPots[i].xPosition, plantPots[i].yPosition +20, xSize, ySize -20);
    }
    for (let i = 0; i < 9; i++){
      
      if(hotBarSlots[i].selected){
        //ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fillStyle = "Black"
        ctx.drawImage(hotBarImage, hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
        ctx.globalAlpha = 0.3
        ctx.fillRect(hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
        ctx.globalAlpha = 1
      }
      else{
        ctx.drawImage(hotBarImage, hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
      }
      if(hotBarSlots[i].hasItem){
        ctx.drawImage(tempImg, hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
      }
    }
    
    for(let i = 0; i < plantPots.length; i++){
      if(plantPots[i].seedPlanted){
        ctx.drawImage(tempImg, plantPots[i].xPosition, plantPots[i].yPosition, xSize, ySize)
      }
    }
    
      // Runs the movetest function, see input.js
    }