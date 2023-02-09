const inputPassword = document.querySelector('#password')
const inputConfirmPassword = document.querySelector('#confirmPassword')
const passwordAlert = document.querySelector('#passwordAlert')


inputPassword.addEventListener('input',() => checkIfPasswordMatch())

inputConfirmPassword.addEventListener('input',() => checkIfPasswordMatch())

function checkIfPasswordMatch(){

    if(inputPassword.value != '' && inputConfirmPassword.value != ''){

        if(inputPassword.value === inputConfirmPassword.value){

            passwordAlert.classList.add('success')
            passwordAlert.classList.remove('error')
            passwordAlert.textContent = '*Passwords match!'

        } else {

            passwordAlert.classList.add('error')
            passwordAlert.classList.remove('success')
            passwordAlert.textContent = '*Passwords do not match'

        }

    } else {

        passwordAlert.classList.remove('success')
        passwordAlert.classList.remove('error')
        passwordAlert.textContent = null

    }

}