


var ctx = document.getElementById("indexchart").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'line',
  options: {
    scales: {
      xAxes: [{
        type: 'time',
      }]
    }
  },
  data: {
    // labels: ["2015-03-15T13:03:00Z", "2015-03-25T13:02:00Z", "2015-04-25T14:12:00Z"],
    datasets: [{
      label: 'Live Data',
      data:[{
        't': '2021-10-05 15:51:45.229885',
        'y': 20
      },
      {
        't': '2021-10-05 15:51:25.229885',
        'y': 10
      },
      {
        't': '2021-10-05 15:51:20.229885',
        'y': 5
      }]
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
});

// BAR CHART CHARTJS
var ctx = document.getElementById("barchart");
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Car", "Bus",'Truck',"Rickshaw","Bike","Van"],
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
    responsive: true}
  //   scales: {
  //     xAxes: [{
  //       ticks: {
  //         maxRotation: 90,
  //         minRotation: 80
  //       },
  //         gridLines: {
  //         offsetGridLines: true // à rajouter
  //       }
  //     },
  //     {
  //       // position: "top",
  //       ticks: {
  //         maxRotation: 90,
  //         minRotation: 80
  //       },
  //       gridLines: {
  //         offsetGridLines: true // et matcher pareil ici
  //       }
  //     }],
  //     yAxes: [{
  //       ticks: {
  //         beginAtZero: true
  //       }
  //     }]
  //   }
  // }
});


// BAR Chart end chartjs
var ctx = document.getElementById("piechart");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Car", "Bus",'Truck',"Rickshaw","Bike","Van"],
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
    responsive: true}
  //   scales: {
  //     xAxes: [{
  //       ticks: {
  //         maxRotation: 90,
  //         minRotation: 80
  //       },
  //         gridLines: {
  //         offsetGridLines: true // à rajouter
  //       }
  //     },
  //     {
  //       // position: "top",
  //       ticks: {
  //         maxRotation: 90,
  //         minRotation: 80
  //       },
  //       gridLines: {
  //         offsetGridLines: true // et matcher pareil ici
  //       }
  //     }],
  //     yAxes: [{
  //       ticks: {
  //         beginAtZero: true
  //       }
  //     }]
  //   }
  // }
});

//  Donut chart chartjs






// donut chart end chartjs

    // <script>
    // document.getElementById('vid').play();
    // $(".containermap").mapael({
    //     map : {
    //         name : "world_countries"
    //     }
    // });

    $(function () {
      /*
       * Flot Interactive Chart
       * -----------------------
       */
      // We use an inline data source in the example, usually data would
      // be fetched from a server
      var data = [],
        totalPoints = 100

      function getRandomData() {

        if (data.length > 0) {
          data = data.slice(1)
        }

        // Do a random walk
        while (data.length < totalPoints) {

          var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5

          if (y < 0) {
            y = 0
          } else if (y > 100) {
            y = 100
          }

          data.push(y)
        }

        // Zip the generated y values with the x values
        var res = []
        for (var i = 0; i < data.length; ++i) {
          res.push([i, data[i]])
        }

        return res
      }

      var interactive_plot = $.plot('#interactive', [
        {
          data: getRandomData(),
        }
      ],
        {
          grid: {
            borderColor: '#f3f3f3',
            borderWidth: 1,
            tickColor: '#f3f3f3'
          },
          series: {
            color: '#3c8dbc',
            lines: {
              lineWidth: 2,
              show: true,
              fill: true,
            },
          },
          yaxis: {
            min: 0,
            max: 100,
            show: true
          },
          xaxis: {
            show: true
          }
        }
      )

      var updateInterval = 500 //Fetch data ever x milliseconds
      // var realtime = 'on' //If == to on then fetch data every x seconds. else stop fetching
      function update() {

        interactive_plot.setData([getRandomData()])

        // Since the axes don't change, we don't need to call plot.setupGrid()
        interactive_plot.draw()
        // if (realtime === 'on') {
        setTimeout(update, updateInterval)
        // }
      }

      //INITIALIZE REALTIME DATA FETCHING
      // if (realtime === 'on') {
      update()
      // }
      //REALTIME TOGGLE
      // $('#realtime .btn').click(function () {
      //   if ($(this).data('toggle') === 'on') {
      //     realtime = 'on'
      //   }
      //   else {
      //     realtime = 'off'
      //   }
      //   update()
      // })
      /*
       * END INTERACTIVE CHART
       */


      /*
       * LINE CHART
       * ----------
       */
      //LINE randomly generated data

      var sin = [],
        cos = []
      for (var i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i)])
        cos.push([i, Math.cos(i)])
      }
      var line_data1 = {
        data: sin,
        color: '#3c8dbc'
      }
      var line_data2 = {
        data: cos,
        color: '#00c0ef'
      }
      $.plot('#line-chart', [line_data1, line_data2], {
        grid: {
          hoverable: true,
          borderColor: '#f3f3f3',
          borderWidth: 1,
          tickColor: '#f3f3f3'
        },
        series: {
          shadowSize: 0,
          lines: {
            show: true
          },
          points: {
            show: true
          }
        },
        lines: {
          fill: false,
          color: ['#3c8dbc', '#f56954']
        },
        yaxis: {
          show: true
        },
        xaxis: {
          show: true
        }
      })
      //Initialize tooltip on hover
      $('<div class="tooltip-inner" id="line-chart-tooltip"></div>').css({
        position: 'absolute',
        display: 'none',
        opacity: 0.8
      }).appendTo('body')
      $('#line-chart').bind('plothover', function (event, pos, item) {

        if (item) {
          var x = item.datapoint[0].toFixed(2),
            y = item.datapoint[1].toFixed(2)

          $('#line-chart-tooltip').html(item.series.label + ' of ' + x + ' = ' + y)
            .css({
              top: item.pageY + 5,
              left: item.pageX + 5
            })
            .fadeIn(200)
        } else {
          $('#line-chart-tooltip').hide()
        }

      })
      /* END LINE CHART */

      /*
       * FULL WIDTH STATIC AREA CHART
       * -----------------
       */
      // var areaData = [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6],
      // [8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9],
      // [15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]]
      // $.plot('#area-chart', [areaData], {
      //   grid: {
      //     borderWidth: 0
      //   },
      //   series: {
      //     shadowSize: 0, // Drawing is faster without shadows
      //     color: '#00c0ef',
      //     lines: {
      //       fill: true //Converts the line chart to area chart
      //     },
      //   },
      //   yaxis: {
      //     show: false
      //   },
      //   xaxis: {
      //     show: false
      //   }
      // })

      /* END AREA CHART */

      /*
       * BAR CHART
       * ---------
       */

      // var bar_data = {
      //   data : [[1,10], [2,8], [3,4], [4,13], [5,17], [6,9]],
      //   bars: { show: true }
      // }
      // $.plot('#bar-chart', [bar_data], {
      //   grid  : {
      //     borderWidth: 1,
      //     borderColor: '#f3f3f3',
      //     tickColor  : '#f3f3f3'
      //   },
      //   series: {
      //      bars: {
      //       show: true, barWidth: 0.5, align: 'center',
      //     },
      //   },
      //   colors: ['#3c8dbc'],
      //   xaxis : {
      //     ticks: [[1,'Car'], [2,'Rickshaw'], [3,'Bike'], [4,'Bus'], [5,'Van'], [6,'Truck']]
      //   }
      // })
      /* END BAR CHART */

      /*
       * DONUT CHART
       * -----------
       */

      var donutData = [
        {
          label: 'Series2',
          data: 30,
          color: '#3c8dbc'
        },
        {
          label: 'Series3',
          data: 20,
          color: '#0073b7'
        },
        {
          label: 'Series4',
          data: 50,
          color: '#00c0ef'
        }
      ]
      $.plot('#donut-chart', donutData, {
        series: {
          pie: {
            show: true,
            radius: 1,
            innerRadius: 0.5,
            label: {
              show: true,
              radius: 2 / 3,
              formatter: labelFormatter,
              threshold: 0.1
            }

          }
        },
        legend: {
          show: false
        }
      })
      /*
       * END DONUT CHART
       */

    })

    /*
     * Custom Label formatter
     * ----------------------
     */
    /*
      * BAR CHART
      * ---------
      */

    var bar_data = {
      data: [[1, 8], [2, 10], [3, 4], [4, 1], [5, 1], [6, 1]],
      bars: { show: true }
    }
    $.plot('#bar-chart', [bar_data], {
      grid: {
        borderWidth: 1,
        borderColor: '#f3f3f3',
        tickColor: '#f3f3f3'
      },
      series: {
        bars: {
          show: true, barWidth: 0.5, align: 'center',
        },
      },
      colors: ['#3c8dbc'],
      xaxis: {
        ticks: [[1, 'Car'], [2, 'Rickshaw'], [3, 'Bike'], [4, 'Bus'], [5, 'Van'], [6, 'Truck']]
      }
    })
    /* END BAR CHART */

    //-------------
    // - PIE CHART -
    //-------------
    // Get context with jQuery - using jQuery's .get() method.
    var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
    var pieData = {
      labels: [
        'Car',
        'Rickshaw',
        'Bike',
        'Bus',
        'Van',
        'Truck'
      ],
      datasets: [
        {
          data: [800, 1000, 400, 50, 50, 50],
          backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de']
        }
      ]
    }
    var pieOptions = {
      legend: {
        display: false
      }
    }
    // Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    // eslint-disable-next-line no-unused-vars
    var pieChart = new Chart(pieChartCanvas, {
      type: 'doughnut',
      data: pieData,
      options: pieOptions
    })

    //-----------------
    // - END PIE CHART -
    //-----------------

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

sio.on("frame",(data)=>{
  document.getElementById("frames").src = "data:image/png;base64," + data;

});


sio.on('graph data', (data,bar) => {
    console.log("image data recieved website")
    myChart.data.datasets[0].data.push(data)
    bar_data.data=bar
    console.log("data",myChart.data.datasets[0].data)
    console.log(bar)
    console.log(data)
    myChart.update()
    bar
    
});

// sio.on("imagedata",(data) => {
//     console.log("image data")
//     myChart.data.datasets[1]=data
//     console.log("data"+myChart.data.datasets)
//     console.log(data)

// });