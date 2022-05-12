let xSize = 100
let ySize = 100

// This is a temporary thing, its just here for
function moveTest() {
    ctx.fillStyle ="blue"
    ctx.fillRect(xPosition, yPosition, xSize, ySize)

    xPosition = xPosition + xSpeed
    yPosition = yPosition + ySpeed
    
    if(xPosition >= WIDTH - xSize|| yPosition >= HEIGHT - ySize) {
        if (xPosition >= WIDTH - xSize) {
            xSpeed = -1;
        }
        if(yPosition >= HEIGHT - ySize) {
            ySpeed = -1;
        }
    }
    if(xPosition <= 0 || yPosition <= 0) {
        if (xPosition <= 0) {
            xSpeed = 1;
        }
        if(yPosition <= 0) {
            ySpeed = 1;
        }
    }
}