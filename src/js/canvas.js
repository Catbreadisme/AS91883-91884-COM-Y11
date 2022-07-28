
// Author: Cat
// Version Number: 71

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

// Shop And Money Variables
let shopButtonPosX = 650
let shopButtonPosY = 650

let shopPosX = 350
let shopPosY = 350
let shopSizeX = 450
let shopSizeY = 300
let shopBottomSizeX = 300

let shopItemSize = 50
let shopItemPosX;
let shopItemPosY;
let shopItemSpacing = 75;
let shopBuyOnce = true;

let sideDisplayXSize = 200
let sideDisplayYSize = 70

let walletTextX
let walletTextY

// Start the Program
window.onload = canvasStart

let money = 0;

function canvasStart() {
    ctx = doc.getContext("2d") // Get the canvas element
    gameActive = true // Sets game to active
    
    // Setup of save data
    localStorageGet()
    
    fps = setInterval(canvasUpdate, 0.6) //The amount of times the canvas is called in a second. (Currently 60Fps)
    ticks = setInterval(tickSystem, 1000)

    moveStart() // Starts Movement Event Listners
}

function tickSystem(){
    globalTick ++ // Increases the global tick
    localStorage.setItem('GlobalTick', globalTick) //Saves the Global tick between sessions

    // All the date stuff is going to be used to extend the tick system
    // This is now depricated and will not be used
    /* globalDate = new Date
    saveDate = {
      savedYear: globalDate.getFullYear(),
      savedMonth: globalDate.getUTCMonth(),
      savedDay: globalDate.getDate(),
      savedHour: globalDate.getHours(),
      savedMinute: globalDate.getMinutes(),
      savedSecond: globalDate.getSeconds()
    }
    localStorage.setItem("SaveDate", saveDate) */
    // Heres where the date stops

    growSeeds() // Runs grow seeds function which checks if a seed can grow, check input.js for more
    
    if (hotBarSlots[hotBarSlot].itemAmmount <= 0){
      hotBarSlots[hotBarSlot].item = 'Empty'
      hotBarSlots[hotBarSlot].itemType = 'Empty'
      hotBarSlots[hotBarSlot].hasItem = false
      hotBarSlots[hotBarSlot].itemAmmount = 0
    }
    localStorageSave() // Overwrites the local storage save automaticaly
    
}

// Updates 60 times per seconds, see fps
function canvasUpdate() {

    ctx.clearRect(0, 0, WIDTH, HEIGHT) // Clears the canvas, eliminates mess
 
    // Draws the seeds first to display behind the pots
    for(let i = 0; i < plantPots.length; i++){
      if(plantPots[i].seedPlanted && plantPots[i].stage1 == true){
        ctx.drawImage(plantPots[i].seedInPot.stage1Image, plantPots[i].xPosition, plantPots[i].yPosition-plantYOffset)
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
        ctx.drawImage(hotBarImage, hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
        ctx.globalAlpha = 0.3
        ctx.fillRect(hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
        ctx.globalAlpha = 1
      }
      // Draws unselected hotbar slot
      else{
        ctx.drawImage(hotBarImage, hotBarSlots[i].xPos, hotBarSlots[i].yPos, hotBarSlots[i].xSize, hotBarSlots[i].ySize)
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
    itemSelectDisplay = hotBarSlots[hotBarSlot].item.itemName // Sets the display to the current held item
    if(itemSelectDisplay == undefined){ // If there is no item make the item display empty
        itemSelectDisplay = 'Empty'
    }
    else if (hotBarSlots[hotBarSlot].itemType == itemTypes[0]){
      itemSelectDisplay = itemSelectDisplay +" Seeds"
    }
    // Draws the Wallet and shop icons
    ctx.fillStyle = 'White'
    ctx.fillRect(shopButtonPosX, 0, sideDisplayXSize, sideDisplayYSize)
    ctx.fillRect(shopButtonPosX, shopButtonPosY, sideDisplayXSize, sideDisplayYSize)

    // Draws the wallet and shop icon text
    ctx.fillStyle = 'Black'
    ctx.font = '20px Arial'
    ctx.fillText("Wallet " + money, 675, 40)
    ctx.fillText('Shop', 700, 695)

    // Draws what item is selected
    if(itemSelectDisplay != undefined){
      ctx.fillText(itemSelectDisplay, 325, 700)
    }
    // Sets the shop item positions
    shopItemPosX = shopPosX + 25
      shopItemPosY = shopPosY + 25

    if(shopOpen){ // Draws the shop panel
      ctx.globalAlpha = 0.5
      ctx.fillStyle = 'White'
      ctx.fillRect(shopPosX, shopPosY, shopSizeX, shopSizeY)
      ctx.fillRect(shopPosX, shopPosY+shopSizeY, shopBottomSizeX, sideDisplayYSize)
      ctx.globalAlpha = 1
      
      
      // Draws the items in the shop and the price
      for(let i = 0; i < SeedPackets.length; i++){
        ctx.drawImage(SeedPackets[i].itemImage, shopItemPosX, shopItemPosY, shopItemSize, shopItemSize)
        ctx.fillText(SeedPackets[i].price, shopItemPosX, shopItemPosY)
        
        // Shop item collison
        if(mousePressed && shopBuyOnce){
          if(mouseEventShop.offsetX >= shopItemPosX && 
            mouseEventShop.offsetY >= shopItemPosY && 
            mouseEventShop.offsetX <= shopItemPosX + shopItemSize &&
            mouseEventShop.offsetY <= shopItemPosY + shopItemSize) // Collision code for the objects
              {
                // Shop item buying
                if(!hotBarSlots[hotBarSlot].hasItem || hotBarSlots[hotBarSlot].item.itemName == SeedPackets[i].itemName){
                  if(money >= SeedPackets[i].price){
                    hotBarSlots[hotBarSlot].item = SeedPackets[i]
                    hotBarSlots[hotBarSlot].itemType = itemTypes[0]
                    hotBarSlots[hotBarSlot].hasItem = true
                    hotBarSlots[hotBarSlot].itemAmmount = hotBarSlots[hotBarSlot].itemAmmount + 1
                    money = money - SeedPackets[i].price
                    shopBuyOnce = false
                  }
                }
        }
      }
      // Automates the shop item setup
      if(shopItemPosX <= 700){
        shopItemPosX = shopItemPosX + shopItemSpacing
      }
      else{
        shopItemPosX = shopPosX + 25
        shopItemPosY = shopPosY + 25 + shopItemSpacing
      }
      }
    }
  }