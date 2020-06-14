const redFamily = 0,
  pinkFamily = 1,
  orangeFamily = 2,
  yellowFamily = 3,
  purpleFamily = 4,
  greenFamily = 5,
  blueFamily = 6

const redColors = [
  'IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'Crimson',
  'Red', 'FireBrick', 'DarkRed'
]

const pinkColors = [
  "Pink", "LightPink", "HotPink", "DeepPink", "MediumVioletRed",
  "PaleVioletRed"
]

const orangeColors = [
  "LightSalmon", "Coral", "Tomato", "OrangeRed", "DarkOrange",
  "Orange"
]

const yellowColors = [
  'Gold', 'Yellow', 'LightYellow', 'LemonChiffon',
  'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff',
  'PaleGoldenrod', 'Khaki', 'DarkKhaki'
]

const purpleColors = [
  'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia',
  'Magenta', 'MediumOrchid', 'MediumPurple', 'RebeccaPurple',
  'BlueViolet', 'DarkViolet', 'DarkOrchid', 'DarkMagenta',
  'Purple', 'Indigo', 'SlateBlue', 'DarkSlateBlue', 'MediumSlateBlue'
]

const greenColors = [
  'GreenYellow', 'Chartreuse', 'LawnGreen', 'Lime', 'LimeGreen',
  'PaleGreen', 'LightGreen', 'MediumSpringGreen', 'SpringGreen',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen',
  'YellowGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen',
  'MediumAquamarine', 'DarkSeaGreen', 'LightSeaGreen', 'DarkCyan', 'Teal'
]

const blueColors = [
  'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise',
  'MediumTurquoise', 'DarkTurquoise', 'CadetBlue', 'SteelBlue',
  'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'MediumSlateBlue',
  'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue'
]



const colors = [pinkColors, redColors, orangeColors, yellowColors, purpleColors, greenColors, blueColors]

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

  for (let i = 0; i <= 100; i++) {
    const rndNum = randomNumber(0, 100)
    ok = rndNum >= 0 && rndNum <= 100 && ok
  }

  return ok
}

assert("Testing randomNumber...", true, test_randomNumber())

/**
 * function coloringDay
 * 
 * it just returns a random color from a family color for every day of the week
 * 
 */

function coloringDay() { 

  const familyColorIndex = new Date().getDay()

  const colorsForToday = colors[familyColorIndex]

  const randomIndex = randomNumber(0, colorsForToday.length - 1)

  return colorsForToday[randomIndex]
}


function mockColoringDay() { 
  familyColors = [ redFamily, pinkFamily, orangeFamily, yellowFamily, purpleFamily, greenFamily, blueFamily ]

  /*
  * Descomentar la familia de colores que se quiera probar
  * y actualizar varias veces el navegador
  */
  
  //familyColorIndex = redFamily
  familyColorIndex = blueFamily
  //familyColorIndex = pinkFamily
  //familyColorIndex = greenFamily
  //familyColorIndex = orangeFamily
  //familyColorIndex = purpleFamily
  //familyColorIndex = yellowFamily

  const colorsForToday = colors[familyColorIndex]

  const randomIndex = randomNumber(0, colorsForToday.length - 1)
  console.log("randomIndex: ", randomIndex)
  return colorsForToday[randomIndex]
}

/**
 * I'm testing that the array colors at index aDayNumber contains the color for today
 */
function test_coloringDay() {
  
  let ok = true

  for (let i = 1; i <= 100; i++) {
    const aDayNumber = new Date().getDay()
    const aColor = coloringDay()
    ok = ok && colors[aDayNumber].includes(aColor)    
    //ok = ok && colors[(new Date()).getDay()].includes(coloringDay())
  }

  return ok
}

assert("Testing coloringDay() function...", true, test_coloringDay())


/**
 * function setBackgroundColor
 * 
 * it just set the specified color as background on the specified container
 * 
 */

function setBackgroundColor(color, container) { 
  container.style.backgroundColor = color
}

const body = document.getElementsByTagName("body")[0]

setBackgroundColor(coloringDay(), body)

/* 
* Descomentar la línea siguiente para un test rápido de las diferentes
* familias de colores, luego ver la función mockColoringDay().
*/
//setBackgroundColor(mockColoringDay(), body)

