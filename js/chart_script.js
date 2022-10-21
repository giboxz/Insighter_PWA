var options1 = {
  chart: {
    id: "chart2",
    type: "area",
    height: 230,
    foreColor: "#000524",
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["#3540E6"],
  stroke: {
    width: 3
  },
  grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },
  markers: {
    size: 5,
    colors: ["#fff"], 
    strokeColor: "#25E6B1", //cor da bolinha
    strokeWidth: 3
  },
  series: [],
  tooltip: {
    theme: "light"
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    min: 0,
    tickAmount: 5
  }
};

var options2 = {
  chart: {
    id: "chart2",
    type: "area",
    height: 230,
    foreColor: "#000524",
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["#3540E6"],
  stroke: {
    width: 3
  },
  grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },
  markers: {
    size: 5,
    colors: ["#fff"],
    strokeColor: "#25E6B1",
    strokeWidth: 3
  },
  series: [
  ],
  tooltip: {
    theme: "light"
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    min: 0,
    tickAmount: 5
  }
};

var options3 = {
  chart: {
    id: "chart2",
    type: "area",
    height: 230,
    foreColor: "#000524",
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["#3540E6"],
  stroke: {
    width: 3
  },
  grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },
  markers: {
    size: 5,
    colors: ["#fff"],
    strokeColor: "#25E6B1",
    strokeWidth: 3
  },
  series: [
  ],
  tooltip: {
    theme: "light"
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    min: 0,
    tickAmount: 5
  }
};


function updateChart(chartOption, dataSeries) {
  chartOption.series = [
    {
      data: dataSeries
    }
  ]
  return chartOption;
}




// var options2 = {
//   chart: {
//     id: "chart1",
//     height: 130,
//     type: "bar",
//     foreColor: "#ccc",
//     brush: {
//       target: "chart2",
//       enabled: true
//     },
//     selection: {
//       fill: {
//         color: "#fff",
//         opacity: 0.4
//       },
//       xaxis: {
//         min: new Date("27 Jul 2017 10:00:00").getTime(),
//         max: new Date("14 Aug 2017 10:00:00").getTime()
//       }
//     }
//   },
//   colors: ["#FF0080"],
//   series: [
//     {
//       data: data
//     }
//   ],
//   stroke: {
//     width: 2
//   },
//   grid: {
//     borderColor: "#444"
//   },
//   markers: {
//     size: 0
//   },
//   xaxis: {
//     type: "datetime",
//     tooltip: {
//       enabled: false
//     }
//   },
//   yaxis: {
//     tickAmount: 2
//   }
// };

// var chart2 = new ApexCharts(document.querySelector("#chart-bar"), options2);

// chart2.render();

function generateDayWiseTimeSeries(baseval, count, yrange ) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * ((yrange.max + 20) - (yrange.min - 10) + 1)) + (yrange.min);
    // TODO mudar o valor da condição para uma variavel MAX/MIN
      if (y > yrange.max || y < yrange.min) {
      series.push({x: x, y: y, strokeColor: "#EC2F2F"});
    } else {
    series.push({x: x, y: y});
    }
    baseval += 600000;
    i++;
  }

  return series;
}

const toggleMenuOpen = () => {
  document.body.classList.toggle("open");
}

function getSingleData(id) {
  fetch(`https://retoolapi.dev/2PlLEF/data/${id}`)
  .then(response => {
      if (!response.ok){
          throw Error("OOPS, SOMETHING WENT WRONG. :(");
      }
      return response.json();        
  }).then(data => {
      document.querySelector('#machine_name').insertAdjacentHTML('afterbegin', data.machineName)
      var data_temp = generateDayWiseTimeSeries(new Date("21 oct 2022").getTime(), 20, {
        min: data.tempMin,
        max: data.tempMax
      });
      updateChart(options1, data_temp);

      var data_noise = generateDayWiseTimeSeries(new Date("21 oct 2022").getTime(), 20, {
        min: data.noiseMin,
        max: data.noiseMax
      });
      updateChart(options2, data_noise);

      var data_vib = generateDayWiseTimeSeries(new Date("21 oct 2022").getTime(), 20, {
        min: data.vibMin,
        max: data.vibMax
      });
      updateChart(options3, data_vib);

      var chart1 = new ApexCharts(document.querySelector("#chart-area-temp"), options1);
      var chart2 = new ApexCharts(document.querySelector("#chart-area-noise"), options2);
      var chart3 = new ApexCharts(document.querySelector("#chart-area-vib"), options3);

      chart1.render();
      chart2.render();
      chart3.render();
        }).catch(error => {
            console.log(error);
        })
};
function init() {
  const url = new URL(window.location.href);
  const machineId = url.searchParams.get("machineId");
  getSingleData(machineId);
}
init();