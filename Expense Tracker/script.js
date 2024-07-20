document.getElementById('add-btn').addEventListener('click', addTransaction);

function addTransaction() {
    const text = document.getElementById('text').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = new Date().toLocaleString();

    if (text.trim() === '' || isNaN(amount)) {
        alert('Please enter a valid expense name and amount.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = amount > 0 ? 'income' : 'expense';
    listItem.innerHTML = `
        ${text} <span>${amount < 0 ? '-' : '+'}$${Math.abs(amount).toFixed(2)}</span>
        <button class="delete-btn">x</button>
        <div class="date">${date}</div>
    `;

    document.getElementById('list').appendChild(listItem);
    updateBalance(amount);

    document.getElementById('text').value = '';
    document.getElementById('amount').value = '';

    listItem.querySelector('.delete-btn').addEventListener('click', () => {
        removeTransaction(listItem, amount);
    });
}

function updateBalance(amount) {
    const balanceElement = document.getElementById('balance');
    const currentBalance = parseFloat(balanceElement.innerText.replace('$', ''));
    const newBalance = currentBalance + amount;
    balanceElement.innerText = `$${newBalance.toFixed(2)}`;
}

function removeTransaction(listItem, amount) {
    listItem.remove();
    updateBalance(-amount);
}
