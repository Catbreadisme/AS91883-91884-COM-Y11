// This script sets up items and other class based objects

// Sets up the hotbar slots
let hotBarSlot1 = new HotBarClass(1, 40)
let hotBarSlot2 = new HotBarClass(2, 120)
let hotBarSlot3 = new HotBarClass(3, 200)
let hotBarSlot4 = new HotBarClass(4, 280)
let hotBarSlot5 = new HotBarClass(5, 360)
let hotBarSlot6 = new HotBarClass(6, 440)
let hotBarSlot7 = new HotBarClass(7, 520)
let hotBarSlot8 = new HotBarClass(8, 600)
let hotBarSlot9 = new HotBarClass(9, 680)

// Hotbar Array
let hotBarSlots = [hotBarSlot1, hotBarSlot2, hotBarSlot3, hotBarSlot4, hotBarSlot5, hotBarSlot6, hotBarSlot7, hotBarSlot8, hotBarSlot9]

// Sets up the plant pots
let pot1 = new PlantPot(0, 0, true)
let pot2 = new PlantPot(0, 100, true)
let pot3 = new PlantPot(0, 200, true)
let pot4 = new PlantPot(0, 300, true)
let pot5 = new PlantPot(0, 400, true)

// Plantpot array
let plantPots = [pot1, pot2, pot3, pot4, pot5]

// Types of items array
let itemTypes = ['Seed Packet', 'Watering Can', 'Trash Can']

// Seed Setup
let tomatoSeeds = new SeedPacket(10, 'Tomato', 20, 'images/TomatoSeeds.png', 10)
let basilSeeds = new SeedPacket(5, 'Basil', 5, 'images/BasilSeeds.png', 2)
let limeSeeds = new SeedPacket(20, 'Lime', 40, 'images/LimeSeeds.png', 30)
let heartleafSeeds = new SeedPacket(5, 'Heartleaf', 3, 'images/HeartleafSeeds.png', 1)


let SeedPackets = [tomatoSeeds, basilSeeds, limeSeeds, heartleafSeeds]

//Item Setup
let wateringCan = new Item('Watering Can', itemTypes[1], 'images/Watering Can.png')
let trashCan = new Item('Trash Can', itemTypes[2], 'images/Trash Can.png')

//Hotbar Image Setup
let hotBarImage = new Image
hotBarImage.src = 'images/HotbarSlot.png'