document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin@gmail.com' && password === 'admin') {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.dashboard-container').style.display = 'block';
    } else {
        alert('Invalid login credentials');
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    document.querySelector('.dashboard-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

const products = [];
const salesData = [10, 20, 30, 40, 50]; // Example sales data

document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;

    products.push({ name: productName, quantity: productQuantity });
    alert('Product added successfully!');

    // Clear the form
    document.getElementById('product-name').value = '';
    document.getElementById('product-quantity').value = '';

    // Update the sales data (for demonstration purposes)
    salesData.push(parseInt(productQuantity, 10));
    updateChart();
});

function updateChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales Data',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

window.onload = updateChart;

document.getElementById('export-daily').addEventListener('click', function() {
    exportReport('daily');
});

document.getElementById('export-weekly').addEventListener('click', function() {
    exportReport('weekly');
});

document.getElementById('export-monthly').addEventListener('click', function() {
    exportReport('monthly');
});

function exportReport(period) {
    let reportData;
    switch (period) {
        case 'daily':
            reportData = salesData.slice(0, 1); // Example data for one day
            break;
        case 'weekly':
            reportData = salesData.slice(0, 7); // Example data for one week
            break;
        case 'monthly':
            reportData = salesData.slice(0, 30); // Example data for one month
            break;
        default:
            reportData = [];
    }
    
    const csvContent = 'data:text/csv;charset=utf-8,' + reportData.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${period}_sales_report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
