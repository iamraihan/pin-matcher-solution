function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinStr = pin + ''
    if (pinStr.length == 4) {
        return pin
    } else {
        // console.log('get 3 wordp pin', pin);
        return getPin()
    }
}
function generatePin() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin
}

// number event handler
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const calcInput = document.getElementById('typed-numbers')
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
    } else {
        const previousNumber = calcInput.value
        const newNumber = previousNumber + number
        calcInput.value = newNumber
    }
})

//verfiy pin
function verifyPin() {
    let generatePin = document.getElementById('display-pin').value
    let typeNumbers = document.getElementById('typed-numbers').value
    let successMessage = document.getElementById('notify-success')
    let failError = document.getElementById('notify-fail')
    if (generatePin == typeNumbers) {
        successMessage.style.display = 'block'
        failError.style.display = 'none'
    } else {
        failError.style.display = 'block'
        successMessage.style.display = 'none'
    }
}