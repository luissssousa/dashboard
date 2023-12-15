const chartE = document.getElementsByClassName('chart-e');
  new Chart(chartE, {
    type: 'line',
    data: {
      labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun'],
      datasets: [{
        label: 'This year',
        data: [12, 13, 3, 5, 2, 3],
        borderWidth: 1,
      }]
    },
    options: {
      plugins: {
        legend:{
          position: 'bottom'
        },
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});

const chartG = document.getElementsByClassName('chart-g');
new Chart(chartG, {
  type: 'bar',
  data: {
    labels: ['Linux', 'Mac', 'IOS', 'Windows', 'Android', 'Other'],
    datasets: [{
      label: 'Devices',
      data: [15000, 25000, 19000, 30000, 9000, 22000],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 30000
      }
    }
  }
});

const chartH = document.getElementsByClassName('chart-h');
new Chart(chartH, {
  type: 'doughnut',
  data: {
    labels: ['United States', 'Canada', 'Mexico', 'Others'],
    datasets: [{
      label: 'Locations',
      data: [15000, 25000, 19000, 30000, 9000, 22000],
      borderWidth: 1
    }]
  },
  options: {
    plugins:{
      legend:{
        position: 'right'
      }
    },
    scales: {
    //   y: {
    //     beginAtZero: true,
    //     max: 30000
    //   }
    }
  }
  
});

const chartI = document.getElementsByClassName('chart-i');
new Chart(chartI, {
  type: 'bar',
  data: {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dez'],
    datasets: [{
      label: 'Mouths',
      data: [15000, 28000, 19000, 28000, 10000, 22000, 14000, 27000, 17500, 30000, 3000, 22000],
      borderWidth: 1
    }]
  },
  options: {
    plugins:{
      legend:{
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 30000
      }
    }
  }
  
});