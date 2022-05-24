// This script controls the input

// Size of the moving square (temp)
let xSize = 100 
let ySize = 100



// This is a temporary thing, its just here for
function moveTest() {
    

    // Moves the square
    //xPosition = xPosition + xSpeed 
    //yPosition = yPosition + ySpeed
    
    // Bounces the square along the bottom and right of the canvas
    /* if(xPosition >= WIDTH - xSize|| yPosition >= HEIGHT - ySize) {
        if (xPosition >= WIDTH - xSize) {
            xSpeed = -1;
        }
        if(yPosition >= HEIGHT - ySize) {
            ySpeed = -1;
        }
    }
    // Bounces the square along the top and left of the canvas
    if(xPosition <= 0 || yPosition <= 0) {
        if (xPosition <= 0) {
            xSpeed = 1;
        }
        if(yPosition <= 0) {
            ySpeed = 1;
        }
    } */
    let collision;
    let mousePressed;


    window.addEventListener("mousedown", onDown, { once: true })
    //window.addEventListener("mousemove", collisionDetected)
    

    
    

    function onDown(mouseEvent) {
        mousePressed = true       
        if(collisionDetectedBool(mouseEvent)) {
            window.addEventListener("mouseup", onUp, { once: true})
            window.addEventListener("mousemove", mouseMovement)
        } 
    }
    function mouseMovement(mouseEvent) {
        if (mousePressed == true){
        xPosition = mouseEvent.offsetX;
        yPosition = mouseEvent.offsetY;
        }
        //console.log("x " + mouseX, "y " + mouseY)
    }
    function onUp(){
        /* window.removeEventListener("mouseup", onUp)
        window.removeEventListener("mousemove", mouseMovement) */
        mousePressed = false;
        
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

}


