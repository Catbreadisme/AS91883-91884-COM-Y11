
// Name: Cat
// Version Number: Uhhh
// 
// 

// This script controls the game and the canvas

// Size of the canvas
const WIDTH = 800;
const HEIGHT = 800;

// Date + Time
let globalTick = 0;
let saveDate;

// Get the canvas element from html
const doc = document.getElementById("mainCanvas")

// Set the canvas to be the same size as the WIDTH and HEIGHT consts
console.log(doc)
doc.setAttribute("width", WIDTH); 
doc.setAttribute("height", HEIGHT);



// Game management variables
let gameActive; // Shows if game is active
var ctx; // Canvas context variable

// Start the Program
window.onload = canvasStart

// Temp Image for testing
let tempImg = new Image;
tempImg.src = 'images/test.png'

let money = 0;

function canvasStart() {
    ctx = doc.getContext("2d") // Get the canvas element
    gameActive = true //
    
    // Setup of save data
    globalTick = localStorage.getItem('GlobalTick')
    money = parseInt(localStorage.getItem("Money"))
    //Hotbar Save Data (test)
    hotBarSlots[1].item = localStorage.getItem("storedItem2")
    hotBarSlots[2].item = localStorage.getItem("storedItem3")
    hotBarSlots[3].item = localStorage.getItem("storedItem4")
    hotBarSlots[4].item = localStorage.getItem("storedItem5")
    hotBarSlots[5].item = localStorage.getItem("storedItem6")

    hotBarSlots[1].itemType = itemTypes[0]
    hotBarSlots[1].item = tomatoSeeds
    hotBarSlots[1].hasItem = true

    hotBarSlots[2].itemType = itemTypes[0]
    hotBarSlots[2].item = basilSeeds
    hotBarSlots[2].hasItem = true

    hotBarSlots[0].itemType = wateringCan.itemType
    hotBarSlots[0].item = wateringCan
    hotBarSlots[0].hasItem = true

    hotBarSlots[8].itemType = trashCan.itemType
    hotBarSlots[8].item = trashCan
    hotBarSlots[8].hasItem = true
    
    fps = setInterval(canvasUpdate, 0.6) //The amount of times the canvas is called in a second. (Currently 60Fps)
    ticks = setInterval(tickSystem, 1000)

    moveStart() // Starts Movement Event Listners
    for (pots = 0; pots < plantPots.length; pots++){
      console.log("Start positions ", "X", plantPots[pots].xPosition, "Y", plantPots[pots].yPosition)
    }
}

function tickSystem(){
    globalTick ++ // Increases the global tick
    localStorage.setItem('GlobalTick', globalTick) //Saves the Global tick between sessions

    // All the date stuff is going to be used to extend the tick system
    globalDate = new Date
    saveDate = {
      savedYear: globalDate.getFullYear(),
      savedMonth: globalDate.getUTCMonth(),
      savedDay: globalDate.getDate(),
      savedHour: globalDate.getHours(),
      savedMinute: globalDate.getMinutes(),
      savedSecond: globalDate.getSeconds()
    }
    localStorage.setItem("SaveDate", saveDate)
    // Heres where the date stops

    growSeeds() // Runs grow seeds function which checks if a seed can grow, check input.js for more
    
    document.getElementById("money").innerHTML = "Wallet: " + money // Displays the wallet, to be worked into the canvas soon
    
}

// Updates 60 times per seconds, see fps
function canvasUpdate() {
  
    ctx.clearRect(0, 0, WIDTH, HEIGHT) // Clears the canvas, eliminates mess

    // Draws the seeds first because js is a semi syncronus language
    for(let i = 0; i < plantPots.length; i++){
      if(plantPots[i].seedPlanted && plantPots[i].stage1 == true){
        ctx.drawImage(tempImg, plantPots[i].xPosition+25, plantPots[i].yPosition, xSize -50, ySize-50)
      }
      else if (plantPots[i].seedPlanted && plantPots[i].stage2 == true){
        ctx.drawImage(hotBarSlots[i].hotBarImage, plantPots[i].xPosition+25, plantPots[i].yPosition, xSize -50, ySize-50)
      }
    }

    // Draws the plant pots
    for (let i = 0; i < 5; i++){
      ctx.drawImage(plantPots[i].image, plantPots[i].xPosition, plantPots[i].yPosition, xSize, ySize)
    }
    
    // Draws the hotbars, the hotbar selection and the hotbar items
    for (let i = 0; i < 9; i++){
      // Draws Selected hotbar slot
      if(hotBarSlots[i].selected){
        ctx.fillStyle = "Black"
        ctx.drawImage(hotBarSlots[i].hotBarImage, hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
        ctx.globalAlpha = 0.3
        ctx.fillRect(hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
        ctx.globalAlpha = 1
      }
      // Draws unselected hotbar slot
      else{
        ctx.drawImage(hotBarSlots[i].hotBarImage, hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
      }

      if(hotBarSlots[i].hasItem){
        ctx.drawImage(hotBarSlots[i].item.itemImage, hotBarSlots[i].xPos +15, hotBarSlots[i].yPos+15, hotBarSlots[i].xSize -30, hotBarSlots[i].ySize - 30)
      }
    }
    }