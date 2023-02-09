const inputPassword = document.querySelector('#password')
const inputConfirmPassword = document.querySelector('#confirmPassword')
const passwordAlert = document.querySelector('#passwordAlert')

inputPassword.addEventListener('input',() => checkIfPasswordsMatch())
inputConfirmPassword.addEventListener('input',() => checkIfPasswordsMatch())

function checkIfPasswordsMatch(){

    if(inputPassword.value != '' && inputConfirmPassword.value != ''){

        inputPassword.value === inputConfirmPassword.value 
            ? passwordsMatch()
            : passwordsNotMatch()

    } else {

        removeAllPasswordStyles()

    }

}

function passwordsMatch(){

    passwordAlert.classList.add('success')
    passwordAlert.classList.remove('error')
    inputPassword.classList.remove('error')
    inputConfirmPassword.classList.remove('error')
    passwordAlert.textContent = '*Passwords match!'

}

function passwordsNotMatch(){

    passwordAlert.classList.add('error')
    passwordAlert.classList.remove('success')
    inputPassword.classList.add('error')
    inputConfirmPassword.classList.add('error')
    passwordAlert.textContent = '*Passwords do not match'

}

function removeAllPasswordStyles(){

    passwordAlert.classList.remove('success')
    passwordAlert.classList.remove('error')
    inputPassword.classList.remove('error')
    inputConfirmPassword.classList.remove('error')
    passwordAlert.textContent = null

}