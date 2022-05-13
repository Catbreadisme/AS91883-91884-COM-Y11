// This script controls the canvas


const WIDTH = 800;
const HEIGHT = 800;

const doc = document.getElementById("mainCanvas")

console.log(doc)
doc.setAttribute("width", WIDTH);
doc.setAttribute("height", HEIGHT);


var ctx;

// Movement variables (temp)
let xPosition = 0;
let yPosition = 0;
let xSpeed = 1;
let ySpeed = 1;


window.onload = canvasStart

function canvasStart() {
    ctx = doc.getContext("2d") // Get the canvas element

    fps = setInterval(canvasUpdate, 0.6) //The amount of times the canvas is called in a second. (Currently 60Fps)
}

function canvasUpdate() {

    ctx.fillStyle ="black"
    ctx.fillRect(0, 0, WIDTH, HEIGHT)

    moveTest()
    }