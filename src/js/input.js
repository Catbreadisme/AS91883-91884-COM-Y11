// This script controls the input

// Size of the moving square (temp)
let xSize = 100 
let ySize = 100


    function moveStart(){
        window.addEventListener("mousemove", mouseMovement, {})
        window.addEventListener("mousedown", onDown, {})
        window.addEventListener("mouseup", onUp, {})
        
    }   

    let offsets = {}

    let mousePressed = false;
    let mouseMoveActive = false;   
    let id;
    
    

    function onDown(mouseEvent) {
        mousePressed = true
            if(collisionDetectedBool(mouseEvent, id)) {
                mouseMoveActive = true
                
                console.log(id)
                offsets.x = mouseEvent.offsetX - plantPots[id].xPosition
                offsets.y = mouseEvent.offsetY - plantPots[id].yPosition
            }
           
    }

    function mouseMovement(mouseEvent) {
        //console.log(plantPots.length)
        for (let i = 0; i < plantPots.length;){
            //console.log(i)
            //mouseOffsets(mouseEvent, i, {once: true})
            
            if(collisionDetectedBool(mouseEvent, i)){
                id = i;
                console.log(id)
            }
            else{
                i++
            }
        }
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
    function collisionDetectedBool(mouseEvent, i){
        console.log(i)
        if(mouseEvent.offsetX >= plantPots[i].xPosition && 
            mouseEvent.offsetY >= plantPots[i].yPosition && 
            mouseEvent.offsetX <= plantPots[i].xPosition + xSize &&
            mouseEvent.offsetY <= plantPots[i].yPosition + ySize
            && plantPots[i].isDraggable
        ){
            return true;
        }else{
            return false;
        }
    }

    function mouseOffsets(mouseEvent, i){
        offsets.x = mouseEvent.offsetX - plantPots[i].xPosition
        offsets.y = mouseEvent.offsetY - plantPots[i].yPosition
        //console.log(offsets.x, offsets.y)
    }

