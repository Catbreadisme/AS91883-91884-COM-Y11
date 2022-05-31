// This script controls the input

// Size of the squares (temp)
let xSize = 100 
let ySize = 100

    // Starts the event listners
    function moveStart(){
        window.addEventListener("mousemove", mouseMovement, {})
        window.addEventListener("mousedown", onDown, {})
        window.addEventListener("mouseup", onUp, {})
        
    }   

    let offsets = {} // Movement and dragging offsets

    let mousePressed = false; // Variable that is used to show if mouse if down
    let mouseMoveActive = false;   
    let objectSelected = false;
    let id;
    
    

    function onDown(mouseEvent) {
        mousePressed = true // Mouse is down
        
        for (let i = 0; i < plantPots.length; i++){
            //console.log(i)
            //mouseOffsets(mouseEvent, i, {once: true})
            
            if(objectDetectedBool(mouseEvent, i, {once: true})){
                id = i;
                console.log(id)
                objectSelected = true

                offsets.x = mouseEvent.offsetX - plantPots[id].xPosition
                offsets.y = mouseEvent.offsetY - plantPots[id].yPosition

                mouseMoveActive = true
                /* if(collisionDetectedBool(mouseEvent, id)) {
                    mouseMoveActive = true // Square can now move
                    
                    console.log(id)
                    
                } */
            }
        }
        
            
           
    }

    function mouseMovement(mouseEvent) {
        //console.log(plantPots.length)
        if (mousePressed && mouseMoveActive && objectSelected){
        plantPots[id].xPosition = mouseEvent.offsetX - offsets.x; // Moves the pot on the x axis
        plantPots[id].yPosition = mouseEvent.offsetY - offsets.y; // Moves the pot on the y axis
        }
        //console.log("x " + mouseX, "y " + mouseY)
    }
    
    function onUp(){
        /* window.removeEventListener("mouseup", onUp)
        window.removeEventListener("mousemove", mouseMovement) */
        mousePressed = false; // Mouse 
        mouseMoveActive = false;
        objectSelected = false;
    }

    /* function collisionDetectedOG(mouseEvent){
        if(mouseEvent.offsetX >= xPosition && 
            mouseEvent.offsetY >= yPosition && 
            mouseEvent.offsetX <= xPosition + xSize &&
            mouseEvent.offsetY <= yPosition + ySize
        ){
            collision = true;
        }else{
            collision = false;
        }
    } */
    function collisionDetectedBool(mouseEvent){
        //console.log(i)
        if(mouseEvent.offsetX >= plantPots[id].xPosition && 
            mouseEvent.offsetY >= plantPots[id].yPosition && 
            mouseEvent.offsetX <= plantPots[id].xPosition + xSize &&
            mouseEvent.offsetY <= plantPots[id].yPosition + ySize
            && plantPots[id].isDraggable)
        {
            return true;
        }else{
            return false;
        }
    }

    function objectDetectedBool(mouseEvent, i) {
        if(mouseEvent.offsetX >= plantPots[i].xPosition && 
            mouseEvent.offsetY >= plantPots[i].yPosition && 
            mouseEvent.offsetX <= plantPots[i].xPosition + xSize &&
            mouseEvent.offsetY <= plantPots[i].yPosition + ySize)
            {
                return true;
            }else{
                return false;
            }
    }

