// This script controls the canvas

// Size of the canvas
const WIDTH = 800;
const HEIGHT = 800;

// Get the canvas element from html
const doc = document.getElementById("mainCanvas")

// Set the canvas to be the same size as the WIDTH and HEIGHT consts
console.log(doc)
doc.setAttribute("width", WIDTH); 
doc.setAttribute("height", HEIGHT);


var ctx; // Canvas context variable

// Movement variables (temp), see input.js
let xPosition = 0;
let yPosition = 0;
let xSpeed = 1;
let ySpeed = 1;

// Start the canvas
window.onload = canvasStart


function canvasStart() {
    ctx = doc.getContext("2d") // Get the canvas element

    fps = setInterval(canvasUpdate, 0.6) //The amount of times the canvas is called in a second. (Currently 60Fps)
}

// Updates 60 times per seconds, see fps
function canvasUpdate() {

    ctx.fillStyle ="black"  // Set colour to black
    ctx.fillRect(0, 0, WIDTH, HEIGHT)   // Clear the canvas every frame

    moveTest()  // Run the movetest function, see input.js
    }