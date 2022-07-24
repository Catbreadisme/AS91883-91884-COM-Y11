// This script controls the input

// Size of the squares (temp)
let xSize = 100 
let ySize = 100

    // Starts the event listners
    function moveStart(){
        window.addEventListener("mousemove", mouseMovement, {})
        window.addEventListener("mousedown", onDown, {})
        window.addEventListener("mouseup", onUp, {})
        window.addEventListener("keydown", keyDown)
    }   

    // Offsets Object
    let offsets = {} // Movement and dragging offsets

    // Object Movement Variables
    let mousePressed = false;       // Variable that is used to show if mouse if down
    let mouseMoveActive = false;    // Variable that shows if the object can be moved
    let objectSelected = false;     // Variable that shows if an object is selected
    let id;                         // Stores which object is currently selected
    let hotBarSlot = 0;             // Sets The Slot to the first slot by default
    let hotBarSlotKey = 1;          // Sets the HotbarSlotKey to 1 by default
    //let holdTime;
    let savedTick;
    
    // Called when the mouse is clicked
    function onDown(mouseEvent) {
        mousePressed = true // Mouse is down
        
        for (let i = 0; i < plantPots.length; i++){
            
            if(objectDetectedBool(mouseEvent, i, {once: true})){
                id = i; // Sets the id to the currently selected object
                console.log(id) // Logs the id, (Currently just used for testing)
                objectSelected = true // Sets to true to show that an object has been selected

                offsets.x = mouseEvent.offsetX - plantPots[id].xPosition // Creates an offset on the x, This removes weird snapping
                offsets.y = mouseEvent.offsetY - plantPots[id].yPosition // Creates an offset on the y, This removes weird snapping

                mouseMoveActive = true // Sets to true to show that the object can now move

                if(seedPacketSelected(i)){
                    
                    plantPots[i].seedPlanted = true // If there is a seed packet selected and you press the mouse, plant a seed
                    plantPots[i].seedInPot = hotBarSlots[hotBarSlot].item // Sets the seed in pot to be the one planted
                    plantPots[i].savedTick = globalTick
                    console.log(plantPots[i].seedPlanted) //Logs for testing
                    console.log(plantPots[i].seedInPot) //Logs for testing
                    hotBarSlots[hotBarSlot].itemAmmount = hotBarSlots[hotBarSlot].itemAmmount -1
                    console.log(hotBarSlots[hotBarSlot].itemAmmount)
                    
                    //holdTime = activeTime
                }
                if(wateringCanSelected(i)){
                    if(!plantPots[i].isWatered){
                        plantPots[i].isWatered = true;
                    }
                }
                if(trashCanSelected(i)){
                    //Delete sum shit ay
                    money = money + plantPots[i].seedInPot.value
                    console.log(money)
                    money = parseInt(money)
                    localStorage.setItem('Money', money)
                    plantPots[i].seedPlanted = false
                    plantPots[i].seedInPot = 'Empty'
                    plantPots[i].stage1 = true
                    plantPots[i].stage2 = false
                    plantPots[i].isWatered = false
                }
            }
        }
        
            
           
    }

    // Called when the mouse moves
    function mouseMovement(mouseEvent) {
        if (mousePressed && mouseMoveActive && objectSelected){
        plantPots[id].xPosition = mouseEvent.offsetX - offsets.x; // Moves the pot on the x axis
        plantPots[id].yPosition = mouseEvent.offsetY - offsets.y; // Moves the pot on the y axis
        doc.style.cursor = 'grabbing'; // Changes cursor to be the grabbing hand
        }
    }
    
    // Called when the mouse is released
    function onUp(){
        mousePressed = false; // Mouse is released
        mouseMoveActive = false; // Object no longer moves
        objectSelected = false; // Object is no longer selected
        doc.style.cursor = 'default'; // Sets cursor back to default
    }

    // Called when mouse is down, and checks for object collision
    function objectDetectedBool(mouseEvent, i) {
        if(mouseEvent.offsetX >= plantPots[i].xPosition && 
            mouseEvent.offsetY >= plantPots[i].yPosition + 20 && 
            mouseEvent.offsetX <= plantPots[i].xPosition + xSize &&
            mouseEvent.offsetY <= plantPots[i].yPosition + ySize) // Collision code for the objects
            {
                return true; // return true if collision
            }else{
                return false; // return false if no collision
            }
    }
    function seedPacketSelected(i){
        if(hotBarSlots[hotBarSlot].itemType == itemTypes[0] && !plantPots[i].seedPlanted) //Checks if the item in the hot bar is a seed packet
        {
            return true 
        }
        else{
            return false
        }
    }
    function wateringCanSelected(i){
        if(hotBarSlots[hotBarSlot].itemType == itemTypes[1] && plantPots[i].seedPlanted){
            return true
        }
        else{
            return false
        }
    }
    function trashCanSelected(i){
        if(hotBarSlots[hotBarSlot].itemType == itemTypes[2] && plantPots[i].seedPlanted){
            return true
        }
        else{
            return false
        }
    }
    function keyDown(keyEvent) {
        let key = keyEvent.key; //Sets key variable
        
        

        if(key >=1 && key <= 9){ // Checks if the key pressed is one of the hotbar keys
            hotBarSlots[hotBarSlot].selected = false // This stops multiple slots for being selected at once

            hotBarSlot = key -1 // Offsets because its an array and arrays start at 0
            hotBarSlotKey = key // Used to check the hotbar is in use
            hotBar() // Calls the hotbar function
        }
    }

    function hotBar() {
        if (hotBarSlotKey >= 1 && hotBarSlotKey <= hotBarSlots.length){
            hotBarSlots[hotBarSlot].selected = true // Selects the slot pressed
            if (hotBarSlots[hotBarSlot].selected){
                itemSelectDisplay = hotBarSlots[hotBarSlot].item.itemName // Sets the display to the current held item
                if(itemSelectDisplay == undefined){ // If there is no item make the item display empty
                    itemSelectDisplay = 'Empty'
                }
                console.log(itemSelectDisplay) // Logs item for testing
                console.log(hotBarSlots[hotBarSlot].item) // logs the item data for testing
            }
        }

    }

    function growSeeds(){
        for(i = 0; i < plantPots.length; i++){
            let growTick1 = plantPots[i].savedTick + plantPots[i].seedInPot.ticksToGrow
            if(globalTick >= growTick1 && plantPots[i].seedPlanted && plantPots[i].isWatered ){
                plantPots[i].stage1 = false
                plantPots[i].stage2 = true
            }
        }
    }
    function localStorageGet(){
        // Global Data
        globalTick = localStorage.getItem('GlobalTick') // Gets the global tick
        let moneyHold = parseInt(localStorage.getItem("Money")) //Converts the money to an int
        if(isNaN(moneyHold)){ // Fixes a bug that causes money to be NaN on first run
           moneyHold = 0
           money = moneyHold
        }
        else {
            money = moneyHold
        }
        
        //Hotbar Save Data (test)
        for(let i = 0; i < hotBarSlots.length; i++){
            let slotItem = i + 1
            if (localStorage.getItem("storedItem"+slotItem) != null){
                hotBarSlots[i].item = localStorage.getItem("storedItem"+slotItem)
            }
        }

        // Item Setup (test)
        hotBarSlots[1].itemType = itemTypes[0]
        hotBarSlots[1].item = tomatoSeeds
        hotBarSlots[1].hasItem = true
        hotBarSlots[1].itemAmmount = 5;

        hotBarSlots[2].itemType = itemTypes[0]
        hotBarSlots[2].item = basilSeeds
        hotBarSlots[2].hasItem = true
        hotBarSlots[2].itemAmmount = 5;

        hotBarSlots[0].itemType = wateringCan.itemType
        hotBarSlots[0].item = wateringCan
        hotBarSlots[0].hasItem = true
        hotBarSlots[0].itemAmmount = 1

        hotBarSlots[8].itemType = trashCan.itemType
        hotBarSlots[8].item = trashCan
        hotBarSlots[8].hasItem = true
        hotBarSlots[8].itemAmmount = 1
    }
