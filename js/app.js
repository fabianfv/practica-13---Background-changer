const red = [
  'IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'Crimson',
  'Red', 'FireBrick', 'DarkRed'
]

const pink = [
  "Pink", "LightPink", "HotPink", "DeepPink", "MediumVioletRed",
  "PaleVioletRed"
]

const orange = [
  "LightSalmon", "Coral", "Tomato", "OrangeRed", "DarkOrange",
  "Orange"
]

const yellow = [
  'Gold', 'Yellow', 'LightYellow', 'LemonChiffon',
  'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff',
  'PaleGoldenrod', 'Khaki', 'DarkKhaki'
]

const purple = [
  'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia',
  'Magenta', 'MediumOrchid', 'MediumPurple', 'RebeccaPurple',
  'BlueViolet', 'DarkViolet', 'DarkOrchid', 'DarkMagenta',
  'Purple', 'Indigo', 'SlateBlue', 'DarkSlateBlue', 'MediumSlateBlue'
]

const green = [
  'GreenYellow', 'Chartreuse', 'LawnGreen', 'Lime', 'LimeGreen',
  'PaleGreen', 'LightGreen', 'MediumSpringGreen', 'SpringGreen',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen',
  'YellowGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen',
  'MediumAquamarine', 'DarkSeaGreen', 'LightSeaGreen', 'DarkCyan', 'Teal'
]

const blue = [
  'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise',
  'MediumTurquoise', 'DarkTurquoise', 'CadetBlue', 'SteelBlue',
  'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'MediumSlateBlue',
  'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue'
]


const colors = [pink, red, orange, yellow, purple, green, blue]

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
  
  const familyColorIndex = new Date().getDay() - 1

  const colorsForToday = colors[familyColorIndex]

  const randomIndex = randomNumber(0, colorsForToday.length - 1)

  return colorsForToday[randomIndex]
}


function test_coloringDay() { 
  
  let ok = true

  for (let i = 1; i <= 100; i++) {
    ok = ok && colors[(new Date()).getDay() - 1].includes(coloringDay())
  }

  return ok
}

assert("Testing coloringDay() function...", true, test_coloringDay())
