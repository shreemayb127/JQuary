//mixed chart
var mixed = document.getElementById('mixed');
mixed.style.height = '280px';
var mixed = document.getElementById('mixed');
var mixedConfig = new Chart(mixed, {
    type: 'bar',
    data: {
        labels: ['@mdo', '@fat', '@twitter', '@twitter', '@twitter'],
        datasets: [{
            label: '# of data',
            data: [18, 12, 9, 11, 8, 4, 2],
            backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(225, 50, 64, 1)', 'rgba(64, 159, 64, 1)'],
            borderWidth: 1
        }, {
            label: '# of data', 
            data: [20, 19, 18, 14, 12, 15, 10],
            type: 'line', 
            fill: false,
            borderColor: '#2196f3', 
            backgroundColor: '#2196f3',
            borderWidth: 1,
            order: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true, 
        maintainAspectRatio: false, 
    }
})