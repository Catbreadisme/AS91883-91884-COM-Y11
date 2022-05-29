// This script controls the input

// Size of the moving square (temp)
let xSize = 100 
let ySize = 100


    function moveStart(){
        window.addEventListener("mousedown", onDown, {})
        window.addEventListener("mouseup", onUp, {})
        window.addEventListener("mousemove", mouseMovement, {})
    }   

    let offsets = {}

    let mousePressed = false;
    let mouseMoveActive = false;   
    let id;
    
    

    function onDown(mouseEvent) {
        id = -1;
        mousePressed = true
        for (pots = 0; pots < plantPots.length; pots++){
            id = pots;
            if(collisionDetectedBool(mouseEvent)) {
                mouseMoveActive = true
                
                console.log(id)
            }
        }
        if (id >= 0){
        offsets.x = mouseEvent.offsetX - plantPots[id].xPosition
        offsets.y = mouseEvent.offsetY - plantPots[id].yPosition
        }
    }
    function mouseMovement(mouseEvent) {
        if (mousePressed && mouseMoveActive){
        plantPots[id].xPosition = mouseEvent.offsetX - offsets.x;
        plantPots[id].yPosition = mouseEvent.offsetY - offsets.y;
        }
        //console.log("x " + mouseX, "y " + mouseY)
    }
    function onUp(){
        /* window.removeEventListener("mouseup", onUp)
        window.removeEventListener("mousemove", mouseMovement) */
        mousePressed = false;
        mouseMoveActive = false;
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
        console.log(id)
        if(mouseEvent.offsetX >= plantPots[id].xPosition && 
            mouseEvent.offsetY >= plantPots[id].yPosition && 
            mouseEvent.offsetX <= plantPots[id].xPosition + xSize &&
            mouseEvent.offsetY <= plantPots[id].yPosition + ySize
            && plantPots[id].isDraggable
        ){
            return true;
        }else{
            return false;
        }
    }

