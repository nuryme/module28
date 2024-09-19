// function amountFunction() {
//     const amount = document.getElementById('amount').value;
//     return amount;
// }
function inputFieldValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
function getTextFieldValue(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

//toggle
function toggle(id) {
    // hide all the section
    document.getElementById('add-money-container').classList.add('hidden');
    document.getElementById('cash-out-container').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');
    // show the section with the provide id as a parameter
    document.getElementById(id).classList.remove('hidden');
}