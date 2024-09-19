//toggle add money button
document.getElementById('add-money-btn').addEventListener('click', function () {
    toggle('add-money-container');
})
//toggle cash out button
document.getElementById('cash-out-btn').addEventListener('click', function () {
    toggle('cash-out-container');
})
//toggle transaction button
document.getElementById('transaction-btn').addEventListener('click', function () {
    toggle('transaction-container');
})

//Money Adding Button
document.getElementById('adding-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // const amount = document.getElementById('amount').value;
    // amountFunction();
    // const amount = amountFunction();
    const amount = inputFieldValue('amount');
    // const pinNumber = document.getElementById('pinNumber').value;
    const pinNumber = inputFieldValue('pinNumber');
    // const balance = document.getElementById('balance').innerText;
    const balance = getTextFieldValue('balance');
    if(isNaN(amount) || isNaN(pinNumber)) {
        alert("Failed to do the action");
        return;
    }
    if (pinNumber === 1234) {
        // let newBalance = parseFloat(balance)
        // TotalBalance = parseFloat(newBalance) + parseFloat(amount);   Or,
        // TotalBalance = +newBalance + +amount;
        TotalBalance = balance + amount;
        // console.log(TotalBalance)
        document.getElementById('balance').innerText = TotalBalance.toString();

        //adding to transaction history
        const transactionContainer = document.getElementById('transaction-history')
        const ol = document.createElement('ol');
        const li = document.createElement('li');
        li.innerText = 'Money Added ' + amount;
        ol.appendChild(li);
        transactionContainer.appendChild(ol);

    }
    else {
        alert('something is wrong')
    }
})

//Cash Outing Button
document.getElementById('cashing-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // const amount = document.getElementById('cashing-amount').value;
    const amount = inputFieldValue('cashing-amount')
    const pinNumber = document.getElementById('cashing-pinNumber').value;
    // const pinNumber = inputFieldValue('cashing-pinNumber')
    const balance = document.getElementById('balance').innerText;
    if(isNaN(amount) || isNaN(pinNumber)) {
        alert("Failed to do the action");
        return;
    }
    if (pinNumber === '1234') {
        let newBalance = parseInt(balance);
        if(amount > newBalance) {
            alert('You do not have enough money');
            return;
        }
        // TotalBalance = parseFloat(newBalance) - parseFloat(amount);   Or,
        TotalBalance = +newBalance - +amount;
        // console.log(TotalBalance)
        document.getElementById('balance').innerText = TotalBalance;

        //adding to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-rose-200');
        div.innerHTML = `
            <h4 class = 'text-2xl font-bold'>Cash Out</h4>
            <p>Cash Out: ${amount} tk. Current Balance: ${TotalBalance} tk.
        `
        document.getElementById('transaction-history').appendChild(div)
    }
    else {
        alert('something is wrong')
    }
})