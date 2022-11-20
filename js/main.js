import { Modal } from './modal.js'; 
import { AlertError } from './alert-error.js';
import { notANumber, calculateIMC } from './utils.js';
//o nome da constante precisa ser exatamente igual

// Variáveis - Variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close() 
/*oninput é para executar sempre que estiver fazendo alguma alteração nele, 
nesse caso, fechar o alert-error quando estiver fazendo uma alteração*/
inputHeight.oninput = () => AlertError.close()
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber =  notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}