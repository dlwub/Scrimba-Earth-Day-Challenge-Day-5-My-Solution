const coffeesPerDay = [3, 1, 2, 1, 3, 2, 10]
const reusableCupDiscount = 0.5
const coffeePrice = 3
const dailySavings = document.getElementById("daily-savings")
const totalP = document.getElementById("total-p")
const addIntakeInput = document.getElementById("add-intake-input")
const addIntakeBtn = document.getElementById("add-intake-btn")


function calculateSaving(){
  let savings = ""
  let totalSaving = 0
  let savingsPerDayArr = []
  for(let i=0; i < coffeesPerDay.length; i++){
    let dailySaving = coffeesPerDay[i]*reusableCupDiscount
    totalSaving += dailySaving
    savings += `Day ${i + 1}: ${dailySaving.toLocaleString('en-US', {
        style: 'currency', currency: 'USD', })} <br />`
  }
  dailySavings.innerHTML = savings
  totalP.innerHTML = `Total saving on ☕️  <br />${totalSaving.toLocaleString('en-US', {
        style: 'currency', currency: 'USD', })}`
}

function repeateCalculation(){
  coffeesPerDay.push(addIntakeInput.value)
  calculateSaving()
}
calculateSaving()
addIntakeBtn.addEventListener('click', repeateCalculation)
    
// Task: Based on the number of coffees bought and the reusable cup discount, calculate and render each day's savings in the dailySavings element.

// stretch goal 1️⃣: Show the total savings 

// stretch goal 2️⃣: Add an input to add more entries to coffeesPerDay

// stretch goal 3️⃣: Improve the formatting of the numbers, e.g. $1.5 = $1.50

  
