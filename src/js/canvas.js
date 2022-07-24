
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
let itemSelectDisplay; // Keeps Item Stored For Display


//Offsets
let plantXOffset = 25;
let plantYOffset = 75;

let hotbarPosOffset = 15;
let hotbarSizeOffset = 30;

// Start the Program
window.onload = canvasStart

let money = 0;

function canvasStart() {
    ctx = doc.getContext("2d") // Get the canvas element
    gameActive = true //
    
    // Setup of save data
    localStorageGet()
    
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
    
    if (hotBarSlots[hotBarSlot].itemAmmount <= 0){
      hotBarSlots[hotBarSlot].item = 'Empty'
      hotBarSlots[hotBarSlot].itemType = 'Empty'
      hotBarSlots[hotBarSlot].hasItem = false
      hotBarSlots[hotBarSlot].itemAmmount = 0
    }
    //document.getElementById("money").innerHTML = "Wallet: " + money // Displays the wallet, to be worked into the canvas soon
    
}

// Updates 60 times per seconds, see fps
function canvasUpdate() {
  
    ctx.clearRect(0, 0, WIDTH, HEIGHT) // Clears the canvas, eliminates mess
 
    // Draws the seeds first to display behind the pots
    for(let i = 0; i < plantPots.length; i++){
      if(plantPots[i].seedPlanted && plantPots[i].stage1 == true){
        ctx.drawImage(plantPots[i].seedInPot.stage1Image, plantPots[i].xPosition+plantXOffset, plantPots[i].yPosition, xSize -50, ySize-50)
      }
      else if (plantPots[i].seedPlanted && plantPots[i].stage2 == true){
        ctx.drawImage(plantPots[i].seedInPot.stage2Image, plantPots[i].xPosition, plantPots[i].yPosition - plantYOffset, xSize, ySize)
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
        ctx.drawImage(hotBarSlots[i].item.itemImage, hotBarSlots[i].xPos +hotbarPosOffset, hotBarSlots[i].yPos+hotbarPosOffset, hotBarSlots[i].xSize -hotbarSizeOffset, hotBarSlots[i].ySize - hotbarSizeOffset)
        
        if(hotBarSlots[i].itemType == itemTypes[0]){
          ctx.fillStyle = 'Black'
          ctx.font = '20px Arial'
          ctx.fillText(hotBarSlots[i].itemAmmount, hotBarSlots[i].xPos +hotbarPosOffset, hotBarSlots[i].yPos+hotbarPosOffset)
        }
      }
    }
    ctx.fillStyle = 'White'
    ctx.fillRect(650, 0, 200, 70)
    ctx.fillStyle = 'Black'
    ctx.font = '20px Arial'
    ctx.fillText("Wallet " + money, 675, 40)

    if(itemSelectDisplay != undefined){
      ctx.fillText(itemSelectDisplay, 325, 700)
    }
    
    }