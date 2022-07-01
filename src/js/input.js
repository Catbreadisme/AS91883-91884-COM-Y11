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
                    console.log(plantPots[i].seedPlanted) //Logs for testing
                    console.log(plantPots[i].seedInPot) //Logs for testing
                    plantPots[i].savedTick = globalTick
                    //holdTime = activeTime
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
        if(hotBarSlots[hotBarSlot].itemType == itemTypes[0] && !plantPots[i].seedPlanted) //Checks if they item in the hot bar is a seed packet
        {
            console.log('planting') //Logs for testing
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
            //hotBarSlots[hotBarSlot].colour = '#000000'


            hotBarSlot = key -1 // Offsets because its an array and arrays start at 0
            //console.log(hotBarSlot)
            hotBarSlotKey = key // Used to check the hotbar is in use
            //hotBarSlot = hotBarSlot -1
            hotBar() // Calls the hotbar function
        }
    }

    function hotBar() {
        if (hotBarSlotKey >= 1 && hotBarSlotKey <= hotBarSlots.length){
            hotBarSlots[hotBarSlot].selected = true // Selects the slot pressed
            //console.log(hotBarSlots[hotBarSlot])
            if (hotBarSlots[hotBarSlot].selected){
                //console.log(hotBarSlots[hotBarSlot])
                //hotBarSlots[hotBarSlot].colour = '#979998'
                //hotBarSlots[hotBarSlot].item = checkItem()
                console.log(hotBarSlots[hotBarSlot].item) // logs the item
                console.log(hotBarSlots[hotBarSlot].itemType) // Logs the itemtype
            }
        }

    }

    function growSeeds(){
        for(i = 0; i < plantPots.length; i++){
            let growTick1 = plantPots[i].savedTick + plantPots[i].seedInPot.ticksToGrow
            if(growTick1 == globalTick && plantPots[i].seedPlanted){
                plantPots[i].stage1 = false
                plantPots[i].stage2 = true
                console.log(plantPots[i].stage2)
            }
        }
        
        //if (growTick2 == globalTick){

        //}
    }

        /* let growTime;
        
        //for( i = 0; i < plantPots.length; i++){
            growTime = holdTime + parseInt(tomatoSeeds.timeToGrow)

            if(currentTime.CurrentSecond + parseInt(tomatoSeeds.seconds) >= 60){
                console.log('this wont work')
                growtime = growTime + timeLeft
            }
            
            if (tomatoSeeds.timeToGrow){

            }
            if(growTime == time){
                tomatoSeeds.stage1 = false
                tomatoSeeds.stage2 = true
                
                console.log(tomatoSeeds.stage1)
                console.log(tomatoSeeds.stage2)
                
            }
        //}
        console.log(growTime, time) */
    


