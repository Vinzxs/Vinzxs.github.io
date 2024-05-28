let order = [];

function addToOrder() {
    const foodSelect = document.getElementById('foodSelect');
    const drinkSelect = document.getElementById('drinkSelect');

    const foodItem = foodSelect.options[foodSelect.selectedIndex].text;
    const drinkItem = drinkSelect.options[drinkSelect.selectedIndex].text;

    if (foodItem && drinkItem) {
        order.push(foodItem);
        order.push(drinkItem);
        updateOrderSummary();
    }
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.innerHTML = '';

    if (order.length > 0) {
        const ul = document.createElement('ul');
        order.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        orderSummary.appendChild(ul);
    } else {
        orderSummary.innerHTML = '<p>No items ordered yet.</p>';
    }
}

function checkout() {
    alert('Thank you for your order!');
    order = [];
    updateOrderSummary();
}
