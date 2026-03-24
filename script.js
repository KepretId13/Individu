let transactions = [];

function addTransaction() {
    const desc = document.getElementById('desc').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (desc === '' || isNaN(amount)) {
        alert("Mohon isi semua data dengan benar.");
        return;
    }

    const transaction = { id: Date.now(), desc, amount, type };
    transactions.push(transaction);
    
    updateUI();
    clearInputs();
}

function updateUI() {
    const list = document.getElementById('transaction-list');
    list.innerHTML = '';

    let total = 0;
    let inc = 0;
    let exp = 0;

    transactions.forEach(t => {
        const item = document.createElement('li');
        item.classList.add(t.type === 'income' ? 'income-item' : 'expense-item');
        item.innerHTML = `
            <span>${t.desc}</span>
            <span>${t.type === 'income' ? '+' : '-'} Rp ${t.amount.toLocaleString()}</span>
        `;
        list.appendChild(item);

        if (t.type === 'income') {
            inc += t.amount;
        } else {
            exp += t.amount;
        }
    });

    total = inc - exp;

    document.getElementById('total-balance').innerText = `Rp ${total.toLocaleString()}`;
    document.getElementById('total-income').innerText = `Rp ${inc.toLocaleString()}`;
    document.getElementById('total-expense').innerText = `Rp ${exp.toLocaleString()}`;
}

function clearInputs() {
    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
}
