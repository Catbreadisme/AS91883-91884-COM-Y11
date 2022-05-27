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
    

    function onDown(mouseEvent) {
        mousePressed = true       
        if(collisionDetectedBool(mouseEvent)) {
            mouseMoveActive = true
        }
        offsets.x = mouseEvent.offsetX - xPosition
        offsets.y = mouseEvent.offsetY - yPosition
    }
    function mouseMovement(mouseEvent) {
        if (mousePressed && mouseMoveActive){
        xPosition = mouseEvent.offsetX - offsets.x;
        yPosition = mouseEvent.offsetY - offsets.y;
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
        if(mouseEvent.offsetX >= xPosition && 
            mouseEvent.offsetY >= yPosition && 
            mouseEvent.offsetX <= xPosition + xSize &&
            mouseEvent.offsetY <= yPosition + ySize
        ){
            return true;
        }else{
            return false;
        }
    }


