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

    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onRelease)




    function onDown(mouseEvent) {
        let mouseX = 0
        let mouseY = 0
        let move = true
        window.addEventListener("mousemove", mouseMovement)   
        console.log(move)    
        
        
        
    }
    function mouseMovement(mouseEvent) {
        mouseX = mouseEvent.pageX;
        mouseY = mouseEvent.pageY;
        xPosition = mouseX
        yPosition = mouseY
    }
    function onRelease() {
        move = false
        window.removeEventListener("mousemove", mouseMovement)
        console.log(move)
    }


}


