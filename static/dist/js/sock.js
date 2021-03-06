var index = document.getElementById("indexchart").getContext("2d");
var myChart = new Chart(index, {
  type: 'line',
  options: {
    scales: {
      xAxes: [{
        type: 'time',
      }]
    }
  //   scales: {
  //     y: {
  //         beginAtZero: true
  //     }
  // }

  },
  data: {
    // labels: ["2015-03-15T13:03:00Z", "2015-03-25T13:02:00Z", "2015-04-25T14:12:00Z"],
    datasets: [{
      label: 'Live Data',
      data: [
      //   {
      //   't': '2021-10-05 15:51:45.229885',
      //   'y': 20
      // },
      // {
      //   't': '2021-10-05 15:51:25.229885',
      //   'y': 10
      // },
      // {
      //   't': '2021-10-05 15:51:20.229885',
      //   'y': 5
      // }
    ]
      ,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
  // options: {
    
// }
});

// BAR CHART CHARTJS
var bar = document.getElementById("barchart");
var barChart = new Chart(bar, {
  type: 'bar',
  data: {
    labels: ["Car", "Bus", 'Truck', "Rickshaw", "Bike", "Van"],
    datasets: [{
      label: 'Bar Chart',
      data: [12, 19, 3, 5, 3, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
  // options: {
  //   responsive: true
  // }

});


// BAR Chart end chartjs
var pie = document.getElementById("piechart");
var pieChart = new Chart(pie, {
  type: 'doughnut',
  data: {
    labels: ["Car", "Bus", 'Truck', "Rickshaw", "Bike", "Van"],
    datasets: [{
      label: 'Bar Chart',
      data: [12, 19, 3, 5, 3, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }

});

function labelFormatter(label, series) {
  return '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">'
    + label
    + '<br>'
    + Math.round(series.percent) + '%</div>'
}


const sio = io('http://' + document.domain + ':' + location.port);

sio.on('connect', () => {
  console.log('connected clint js');
  //   sio.emit('sum', {numbers: [1, 2]});
});

sio.on('disconnect', () => {
  console.log('disconnected');
});

sio.on("frame", (data) => {
  console.log("frame recieved")
  document.getElementById("frames").src = "data:image/png;base64," + data;

});

sio.on('index data', (data) => {
  // console.log("image data recieved website")
  // console.log(data['indexchart'])
  // console.log(bardata)
  myChart.data.datasets[0].data.push(data['indexchart'])
  pieChart.data.datasets[0].data=data['data']
  barChart.data.datasets[0].data=data['bar']
  // console.log(data['data'])
  // console.log(barChart.data.datasets.data)
  // console.log(myChart.data.datasets[0].data)
  myChart.update()
  barChart.update()
  pieChart.update()
});

// sio.on('bar chart update', (data) => {
//   console.log("bar chart update recieved")
//   console.log(data)
//   barChart.data.datasets[0].data=data
//   barChart.update()
// });
sio.on("averagespeed", (data) => {
  document.getElementById("averagespeed").textContent = data;

});

sio.on("numberplatedetection", (data) => {
  document.getElementById("carnumberplate1").textContent = data;





});

sio.on("linecross", (data) => {
  console.log("linecross recieved")
  console.log(data)
  document.getElementById("linecross").textContent = data['no_plate']
  document.getElementById("totalsignalbreak").textContent=data['signalcount']

});

sio.on("percentages", (data) =>{
  console.log(data)
  document.getElementById("carpercentage").textContent=data['carpercentage']
  document.getElementById("rickshawpercentage").textContent=data['rickshawpercentage']
  document.getElementById("bikepercentage").textContent=data['bikepercentage']
  document.getElementById("truckpercentage").textContent=data['truckpercentage']
  document.getElementById("buspercentage").textContent=data['buspercentage']
  document.getElementById("vanpercentage").textContent=data['vanpercentage']

});
