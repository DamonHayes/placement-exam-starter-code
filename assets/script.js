// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Damon Hayes" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

let totalCount = document.querySelector('#qty-total')

// Gingerbread cookie count
let gbCount = document.querySelector('#qty-gb')


document.getElementById('add-gb').addEventListener('click', function() {
	gb = gb + 1
	total = total + 1
	gbCount.textContent = gb
	totalCount.textContent = total
})

document.getElementById('minus-gb').addEventListener('click', function() {
	if(gb > 0){
	gb = gb - 1
	total = total - 1
	gbCount.textContent = gb
	totalCount.textContent = total
	}
})


// Chocolate chip cookie count
let ccCount = document.querySelector('#qty-cc')

document.getElementById('add-cc').addEventListener('click', function() {
	cc = cc + 1
	total = total + 1
	ccCount.textContent = cc
	totalCount.textContent = total
})

document.getElementById('minus-cc').addEventListener('click', function() {
	if(cc > 0){
	cc = cc - 1
	total = total - 1
	ccCount.textContent = cc
	totalCount.textContent = total
	}
})


// sugar cookie count
let sugarCount = document.querySelector('#qty-sugar')

document.getElementById('add-sugar').addEventListener('click', function() {
	sugar = sugar + 1
	total = total + 1
	sugarCount.textContent = sugar
	totalCount.textContent = total
})

document.getElementById('minus-sugar').addEventListener('click', function() {
	if(sugar > 0){
	sugar = sugar - 1
	total = total - 1
	sugarCount.textContent = sugar
	totalCount.textContent = total
	}
})






