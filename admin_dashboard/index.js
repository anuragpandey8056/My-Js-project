function run(){
    let cont1 = document.querySelector('aside')
    cont1.style.backgroundColor = "yellow";
}
 let  one = document.getElementById("welcome");
 
 let data = window.localStorage.getItem("data");
//  console.log(data)
let converteddata = JSON.parse(data);

one.innerHTML = converteddata.name;

// =========================cards ======================
// Line Chart
const ctxLine = document.getElementById('lineChart').getContext('2d');
                    const lineChart = new Chart(ctxLine, {
                        type: 'line',
                        data: {
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
                            datasets: [
                                {
                                    label: 'Products',
                                    data: [30, 50, 70, 60, 90, 100, 80, 60, 90],
                                    borderColor: '#3b82f6',
                                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                    fill: true,
                                },
                                {
                                    label: 'Services',
                                    data: [40, 60, 80, 50, 70, 95, 85, 55, 75],
                                    borderColor: '#22c55e',
                                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                                    fill: true,
                                },
                            ],
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: {
                                    beginAtZero: true,
                                },
                            },
                        },
                    });

                    // Doughnut Chart
                    const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
                    const doughnutChart = new Chart(ctxDoughnut, {
                        type: 'doughnut',
                        data: {
                            labels: ['Products', 'Services'],
                            datasets: [
                                {
                                    data: [70, 30],
                                    backgroundColor: ['#3b82f6', '#f87171'],
                                },
                            ],
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                        },
                    });

 

