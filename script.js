$(document).ready(function(){
    $('[data-toggle="offcanvas"]').click(function(){
        $("#navigation").toggleClass("hidden-xs");
    });
 });
 
 
// Line Chart for Temperature and Humidity over Time
var ctxLine = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Temperature (°C)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                data: [8, 10, 12, 14, 8, 10, 9],
                yAxisID: 'y'
            },
            {
                label: 'Humidity (%)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                data: [30, 25, 21, 34, 54, 47, 50],
                yAxisID: 'y1'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                type: 'linear',
                position: 'left',
            },
            y1: {
                beginAtZero: true,
                type: 'linear',
                position: 'right',
                grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                },
            },
        }
    }
});

// Bar Chart for Average Temperature and Humidity per Month
var ctxBar = document.getElementById('myBarChart').getContext('2d');
var myBarChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Average Temperature (°C)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                data: [8, 10, 12, 14, 8, 10, 9],
            },
            {
                label: 'Average Humidity (%)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [30, 25, 21, 34, 54, 47, 50],
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

// Dummy data for current temperature and humidity
document.getElementById('currentTemperature').textContent = '23°C';
document.getElementById('currentHumidity').textContent = '50%';