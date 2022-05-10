function moveTest() {
    ctx.fillStyle ="blue"
    ctx.fillRect(xPosition, yPosition, 100, 100)

    xPosition = xPosition + xSpeed
    yPosition = yPosition + ySpeed
    
    if(xPosition >= WIDTH || yPosition >= HEIGHT) {
        if (xPosition >= WIDTH) {
            xSpeed = -1;
        }
        if(yPosition >= HEIGHT) {
            ySpeed = -1;
        }
    }
}