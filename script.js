
// Foods Array
const foods = ['Pizza', 'Tacos', 'Ice Cream', 'Burgers', 'Pasta']

// Render Function
function render(html) {
  document.getElementById('out').innerHTML = html
}

// List Foods Function
function listFoods() {
  let output = ''

  for (const food of foods) {
    output += `<p>${food}</p>`
  }

  render(output)
}

// Numbered Foods Function
function numberedFoods() {
  let output = '<ol class="list-group list-group-numbered">'

  for (let i = 0; i < foods.length; i++) {
    output += `<li class="list-group-item">${foods[i]}</li>`
  }

  output += '</ol>'
  render(output)
}

// Filter Foods Function
function filterFoods() {
  const letter = prompt('Enter a letter to filter foods by:')

  if (!letter || !letter.trim()) {
    render('<p>Please enter a letter!</p>')
    return
  }

  const lower = letter.trim().toLowerCase()
  const matches = foods.filter(food => food.toLowerCase().startsWith(lower))

  if (matches.length === 0) {
    render('<p class="text-danger">No foods found!</p>')
    return
  }

  let output = '<ul class="list-group">'

  matches.forEach(food => {
    output += `<li class="list-group-item">${food}</li>`
  })

  output += '</ul>'
  render(output)
}

// Food Cards Function
function forEachFoods() {
  let output = '<div class="row g-3 justify-content-center">'

  foods.forEach(food => {
    output += `
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <h5 class="card-title">${food}</h5>
          </div>
        </div>
      </div>
    `
  })

  output += '</div>'
  render(output)
}

// Uppercase List Function
function uppercaseList() {
  const upperFoods = foods.map(food => food.toUpperCase())

  let output = '<ul class="list-group">'

  upperFoods.forEach(food => {
    output += `<li class="list-group-item">${food}</li>`
  })

  output += '</ul>'
  render(output)
}

// Reverse List Function
function reverseList() {
  let output = '<ul class="list-group">'

  for (let i = foods.length - 1; i >= 0; i--) {
    output += `<li class="list-group-item">${foods[i]}</li>`
  }

  output += '</ul>'
  render(output)
}

// Random Food Function
function randomFoodPicker() {
  const randomIndex = Math.floor(Math.random() * foods.length)
  const randomFood = foods[randomIndex]

  let output = `
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">Today's Pick</h5>
        <p class="card-text">${randomFood}</p>
      </div>
    </div>
  `

  render(output)
}

// Word Lengths Function
function wordLengths() {
  let output = ''

  for (const food of foods) {
    output += `<p>${food} — ${food.length} letters</p>`
  }

  render(output)
}

// Button Event Listeners

// List Foods Button
document.getElementById('btnList').addEventListener('click', listFoods)

// Numbered List Button
document.getElementById('btnNums').addEventListener('click', numberedFoods)

// Filter Button
document.getElementById('btnFilter').addEventListener('click', filterFoods)

// Food Cards Button
document.getElementById('btnForEach').addEventListener('click', forEachFoods)

// Uppercase Button
document.getElementById('btnUppercase').addEventListener('click', uppercaseList)

// Reverse Button
document.getElementById('btnReverse').addEventListener('click', reverseList)

// Random Food Button
document.getElementById('btnRandom').addEventListener('click', randomFoodPicker)
