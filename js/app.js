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