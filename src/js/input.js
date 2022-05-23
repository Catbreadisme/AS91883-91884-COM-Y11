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


    window.addEventListener("mousedown", onDown)
    window.addEventListener("mousemove", collisionDetected)
    

    function onDown(mouseEvent) {
        if(collision) {
            window.addEventListener("mouseup", onUp)
            window.addEventListener("mousemove", mouseMovement)
        }
    }
    function mouseMovement(mouseEvent) {
        
        xPosition = mouseEvent.clientX;
        yPosition = mouseEvent.clientY;
        //console.log("x " + mouseX, "y " + mouseY)
    }
    function onUp(){
        window.removeEventListener("mouseup", onUp)
        window.removeEventListener("mousemove", mouseMovement)
    }

    function collisionDetected(mouseEvent){
        if(mouseEvent.clientX >= xPosition && 
            mouseEvent.clientY >= yPosition && 
            mouseEvent.clientX <= xPosition + xSize &&
            mouseEvent.clientY <= yPosition + ySize
        ){
            collision = true;
        }else{
            collision = false;
        }
    }
    
    

}


