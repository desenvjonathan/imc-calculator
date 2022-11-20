import { Modal } from './modal.js'; 
import { AlertError } from './alert-error.js';
//o nome da constante precisa ser exatamente igual

// Variáveis - Variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const showAlertError =  notANumber(weight) || notANumber(height)

  if (showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()
  
  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function notANumber(value) {
  return isNaN(value) || value == "" // || = ou
}

function IMC (weight, height) {
  return (weight / ((height / 100) **2)).toFixed(2)
}