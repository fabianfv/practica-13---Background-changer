const rojo = [
  'IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'Crimson',
  'Red', 'FireBrick', 'DarkRed'
]

const rosa = [
  "Pink", "LightPink", "HotPink", "DeepPink", "MediumVioletRed",
  "PaleVioletRed"
]

const naranja = [
  "LightSalmon", "Coral", "Tomato", "OrangeRed", "DarkOrange",
  "Orange"
]

const amarillo = [
  'Gold', 'Yellow', 'LightYellow', 'LemonChiffon',
  'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff',
  'PaleGoldenrod', 'Khaki', 'DarkKhaki'
]

const purpura = [
  'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia',
  'Magenta', 'MediumOrchid', 'MediumPurple', 'RebeccaPurple',
  'BlueViolet', 'DarkViolet', 'DarkOrchid', 'DarkMagenta',
  'Purple', 'Indigo', 'SlateBlue', 'DarkSlateBlue', 'MediumSlateBlue'
]

const verde = [
  'GreenYellow', 'Chartreuse', 'LawnGreen', 'Lime', 'LimeGreen',
  'PaleGreen', 'LightGreen', 'MediumSpringGreen', 'SpringGreen',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen',
  'YellowGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen',
  'MediumAquamarine', 'DarkSeaGreen', 'LightSeaGreen', 'DarkCyan', 'Teal'
]

const azul = [
  'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise',
  'MediumTurquoise', 'DarkTurquoise', 'CadetBlue', 'SteelBlue',
  'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'MediumSlateBlue',
  'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue'
]
  
const marron = [
  'Cornsilk', 'BlanchedAlmond', 'Bisque', 'NavajoWhite', 'Wheat',
  'BurlyWood', 'Tan', 'RosyBrown', 'SandyBrown', 'Goldenrod',
  'DarkGoldenrod', 'Peru', 'Chocolate', 'SaddleBrown', 'Sienna',
  'Brown', 'Maroon'
]

const blanco = [
  'White', 'Snow', 'HoneyDew', 'MintCream', 'Azure', 'AliceBlue',
  'GhostWhite', 'WhiteSmoke', 'SeaShell', 'Beige', 'OldLace',
  'FloralWhite', 'Ivory', 'AntiqueWhite', 'Linen', 'LavenderBlush',
  'MistyRose'
]

const negro = [
  'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray', 'DimGray',
  'LightSlateGray', 'SlateGray', 'DarkSlateGray', 'Black'
]

const colores = [rosa, rojo, naranja, amarillo, purpura, verde, azul, marron, blanco, negro]

/**
 * helper function assert
 * 
 * @param {string} message: it says me if the test was succssesful or not
 * @param {any} expected: it's the expected value from the method or function under test
 * @param {any} returned: it's the real value returned by the method or function under test
 * 
 * it helps me to tests my methods and functions
 */

function assert(message, expected, returned) { 
  console.log(message, expected === returned ? "Alright" : "Something bad is coming!!!" )
}

/**
 * function randomNumber
 * 
 * it just returns a random number between min and max
 * 
 */

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function test_randomNumber() {
  let ok = true

  for (let i = 0; i <= 1000; i++) {
    const rndNum = randomNumber(0, 100)
    ok = rndNum >= 0 && rndNum <= 100 && ok
  }

  return ok
}

assert("Testing randomNumber...", true, test_randomNumber())



