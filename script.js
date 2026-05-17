const ctx = document.getElementById('bpChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
        datasets: [{
            label: 'Systolic',
            data: [120, 115, 160, 110, 150, 160],
            borderColor: '#C26EB4',
            tension: 0.4,
            pointRadius: 6,
            pointHoverRadius: 10,
            pointBackgroundColor: '#E66FD2',
            borderWidth: 3
        }, {
            label: 'Diastolic',
            data: [110, 65, 110, 90, 70, 78],
            borderColor: '#7E6CAB',
            tension: 0.4,
            pointRadius: 6,
            pointHoverRadius: 10,
            pointBackgroundColor: '#8C6FE6',
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: {
                beginAtZero: false,
                min: 60,  /* EXACT 60 SCALE START */
                max: 180,
                ticks: {
                    stepSize: 20,
                    color: '#07263E',
                    font: { weight: 'bold', size: 12 }
                },
                grid: { color: '#E5E5E5', drawBorder: false }
            },
            x: {
                grid: { display: false },
                ticks: { color: '#07263E', font: { weight: 'bold', size: 12 } }
            }
        },
        animation: { duration: 2000, easing: 'easeOutQuart' }
    }
});