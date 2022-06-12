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
    let seedId = false
    let drawSeed = false
    let hotBarSlot = 1
    let tempvar = true
    
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

                if(seedPacketSelected){
                    seedId = i
                    drawSeed = true
                    
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
    function seedPacketSelected(){
        if(tempvar)
        {
            return true
        }
        else{
            return false
        }
    }
    function keyDown(keyEvent) {
        hotBarSlots[hotBarSlot].selected = false
        hotBarSlots[hotBarSlot].colour = '#000000'
        let key = keyEvent.key;
        console.log(key)
        
        
        
        hotBarSlot = key
        //hotBarSlot = hotBarSlot -1
        hotBar()
    }

    function hotBar() {
        if (hotBarSlot >= 0 && hotBarSlot <= 1){
            hotBarSlots[hotBarSlot].selected = true
            console.log(hotBarSlots[hotBarSlot])
            if (hotBarSlots[hotBarSlot].selected){
                console.log(hotBarSlots[hotBarSlot])
                hotBarSlots[hotBarSlot].colour = '#979998'
            }
        }

    }


