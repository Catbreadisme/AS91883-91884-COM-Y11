// This script controls the canvas

// Size of the canvas
const WIDTH = 800;
const HEIGHT = 800;


//Date
//let date = new Date;
//console.log(date)
let globalDate = new Date

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
    this.date = new Date
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

class seedPacket{
  constructor(years, months, days, hours, minutes, seconds){
    this.seconds = seconds
    this.minutes = minutes
    this.hours = hours
    this.days = days
    this.months = months
    this.years = years
    this.timeToGrow = years+"-" + months+"-" + days+" " + hours+":" + minutes+":" + seconds

    this.stage1
    this.stage2
    this.stage3
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
plantPots[4].image.src = 'images/placeholder.png'

let tempImg = new Image;
tempImg.src = 'images/test.png'

let hotBarImage = new Image;
hotBarImage.src = 'images/HotbarSlot.png'

let itemTypes = ['Seed Packet', 'Watering Can']

let tomatoSeeds = new seedPacket(2022, 06, 21, 02, 37, 06)
console.log(tomatoSeeds.timeToGrow)

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

    DateTesting = setInterval(ActiveDateFunction, 1000)

    moveStart() // Starts Movement Event Listners
    for (pots = 0; pots < plantPots.length; pots++){
      console.log("Start positions ", "X", plantPots[pots].xPosition, "Y", plantPots[pots].yPosition)
    }
    
    

    //console.log(ho)
    
}

function ActiveDateFunction(){
  globalDate = new Date

  let currentTime = {
    CurrentYear: globalDate.getFullYear(),
    CurrentMonth: globalDate.getUTCMonth(),
    CurrentDay: globalDate.getDate(),
    CurrentHour: globalDate.getHours(),
    CurrentMinute: globalDate.getMinutes(),
    CurrentSecond: globalDate.getSeconds()
  }

  console.log(currentTime)
  document.getElementById("clock").innerHTML = JSON.stringify(currentTime);
  
}

// Updates 60 times per seconds, see fps
function canvasUpdate() {
  
    ctx.clearRect(0, 0, WIDTH, HEIGHT)

    for(let i = 0; i < plantPots.length; i++){
      if(plantPots[i].seedPlanted){
        ctx.drawImage(tempImg, plantPots[i].xPosition+25, plantPots[i].yPosition, xSize -50, ySize-50)
      }
    }

    for (let i = 0; i < 5; i++){
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
        ctx.drawImage(tempImg, hotBarSlots[i].xPos +15, hotBarSlots[i].yPos+15, hotBarSlots[i].xSize -30, hotBarSlots[i].ySize - 30)
      }
    }
    
      // Runs the movetest function, see input.js
    }