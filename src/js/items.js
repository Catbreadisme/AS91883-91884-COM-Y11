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
let tomatoSeeds = new SeedPacket(10, 'TomatoSeed', 20, 'images/TomatoSeeds.png', 0, 'images/TomatoVine.png')
let basilSeeds = new SeedPacket(5, 'BasilSeed', 5, 'images/BasilSeeds.png', 0, 'images/BasilPlant.png')
let limeSeeds = new SeedPacket(20, 'LimeSeeds', 40, 'images/test.png', 0, 'images/HotbarSlot.png')
let heartleafSeeds = new SeedPacket(5, 'HeartleafSeeds', 3, 'images/test.png', 0, 'images/HotbarSlot.png')
let hartleafSeeds = new SeedPacket(5, 'Heartleaeeds', 3, 'images/test.png', 0, 'images/HotbarSlot.png')
let hearteafSeeds = new SeedPacket(5, 'HeartlfSeeds', 3, 'images/test.png', 0, 'images/HotbarSlot.png')
let heartleaSeeds = new SeedPacket(5, 'Hea', 3, 'images/test.png', 0, 'images/HotbarSlot.png')
let hearleaSeeds = new SeedPacket(5, 'Hea', 3, 'images/test.png', 0, 'images/HotbarSlot.png')

let SeedPackets = [tomatoSeeds, basilSeeds, limeSeeds, heartleafSeeds, hearteafSeeds, hartleafSeeds, heartleaSeeds, hearleaSeeds]

//Item Setup
let wateringCan = new Item('Watering Can', itemTypes[1], 'images/Watering Can Test.png')
let trashCan = new Item('Trash Can', itemTypes[2], 'images/Trash man.png')