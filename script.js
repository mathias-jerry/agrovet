document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can add login validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin@gmail.com' && password === 'admin'){
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.sales-container').style.display = 'block';
    }
    else{
        alert('Invalid credential')
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    document.querySelector('.sales-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

document.getElementById('sales-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const brand = document.getElementById('brand').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const totalCost = quantity * price;
    
    if (confirm(`Item Name: ${itemName}\nBrand: ${brand}\nQuantity: ${quantity}\nPrice per Piece: ${price}\nTotal Cost: ${totalCost}\n\nConfirm this item?`)) {
        alert('Item added successfully!');
        // Here you can add code to submit the item to the system

        document.getElementById('item-name').value = '';
        document.getElementById('brand').value = ''; 
        document.getElementById('quantity').value = '';
        document.getElementById('price').value = '';
        document.getElementById('total-cost').value = '';

        // Reload the page location.reload();
    }
});

document.getElementById('quantity').addEventListener('input', calculateTotalCost);
document.getElementById('price').addEventListener('input', calculateTotalCost);

function calculateTotalCost() {
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const totalCost = quantity * price;
    document.getElementById('total-cost').value = totalCost ? totalCost.toFixed(2) : '';
}
