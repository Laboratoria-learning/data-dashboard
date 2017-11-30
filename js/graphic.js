var ctx = document.getElementById("line-chart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Lima", "Arequipa", "Mexico", "Santiago"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

console.log(myChart);

var pieCtx = document.getElementById('pie-chart').getContext('2d');
var pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: [
            "Lima",
            "Arequipa",
            "Mexico",
            "Santiago"
        ],
        datasets: [
            {
                data: [86.2, 52.2, 51.2, 50.2],
                backgroundColor: [
                    "#FF6384",
                    "#63FF84",
                    "#84FF63",
                    "#8463FF"
                ]
            }]
    },

    options: {
        responsive: true,
        rotation: -Math.PI,
        cutoutPercentage: 30,
        circumference: Math.PI,
        legend: {
            position: 'left'
        },
        animation: {
            animateRotate: false,
            animateScale: true
        }
    }
})