// This script controls the input

// Size of the moving square (temp)
let xSize = 100 
let ySize = 100



// This is a temporary thing, its just here for
function moveTest() {
    ctx.fillStyle ="blue" // Sets colour to blue
    ctx.fillRect(xPosition, yPosition, xSize, ySize) // Creates the square

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
    var mouseDown;
    var mouseUp;

    let mouseX;
    let mouseY;

    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("mousemove", mouseMovement)
    

    function onDown() {
        while (mouseUp == false){
            ctx.fillRect(mouseX, mouseY, xSize, ySize)
        }
            
    }
    function mouseMovement(mouseEvent) {
        
        mouseX = mouseEvent.offsetX;
        mouseY = mouseEvent.offsetY;

        //console.log("x " + mouseX, "y " + mouseY)
    }
    function onUp(mouseEvent){
        mouseUp = true
    }

    
    

}


