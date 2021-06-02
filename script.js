
// Adding Variables

const equation = document.querySelector('.number')
const answerBox = document.querySelector('.answer-box')
const random = document.querySelector('.random')
const reset = document.querySelector('.reset')
const maths = document.querySelector('.math')

let answer = 0
// random.addEventListener('click', function () {
//     let num1 = Math.floor(Math.random() * 100 + 1)
//     let num2 = Math.floor(Math.random() * 100 + 1)
//     answer = num1 + num2
// 	equation.textContent = `${num1} + ${num2} = X`
// })

random.addEventListener('click', function () {
	let num1 = Math.floor(Math.random() * 10 + 1)
	let num2 = Math.floor(Math.random() * 10 + 1)
	answerBox.value = ''
	if (num1 > num2) {
		answer = num1 - num2
		equation.textContent = `${num1} - ${num2} =  ` 
        
        // maths.textContent += `${num1} - ${num2} = X`
	} else {
		answer = num2 - num1
		equation.textContent = `${num2} - ${num1} = `
        // maths.textContent += `${num1} - ${num2} = X`
	}
})

answerBox.addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		event.preventDefault()
		if (answerBox.value == answer) {
			equation.textContent = 'Well Done'
		} else {
			equation.textContent = 'Unlucky'
		}
    }
})

// if (num1 > num2) {
//     pastMath.textContent += `${num1} - ${num2} = ${answer}`
// } else {
//     pastMath.textContent += `${num2} - ${num1} = ${answer}`
// }



//////////////////// NavBar

const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
})