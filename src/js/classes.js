// This script manages classes

// Plant Pot Class
class PlantPot {
    constructor(xPosition, yPosition, isDraggable){
      this.xPosition = xPosition
      this.yPosition = yPosition
      this.draggable = isDraggable
  
      this.image = new Image
      this.image.src = 'images/placeholder.png'
  
      this.seedPlanted = false
      this.seedInPot = 'None'
      this.isWatered = false;
  
      this.stage1 = true
      this.stage2 = false
      this.stage3 = false
      this.savedTick;
    }
  }
  // Hotbar Class
  class HotBarClass {
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
  
        this.hotBarImage = new Image
        this.hotBarImage.src = 'images/HotbarSlot.png'
      }
  
      
  
  }
  // SeedPacket Class
  class SeedPacket{
    constructor(ticksToGrow, seedType, value){
      this.seedType = seedType
      this.ticksToGrow = ticksToGrow
      this.value = value
      //this.growStages
      this.itemImage = new Image
      this.itemImage.src = 'images/test.png'
      
    }
  }
  
  class Item {
    constructor(itemName, itemType, image){
      this.itemName = itemName
      this.itemType = itemType
      this.itemImage = new Image
      this.itemImage.src = image
    }
  }
  
  