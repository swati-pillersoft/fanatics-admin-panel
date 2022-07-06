(function (window, document, $, undefined) {
  "use strict";
  $(function () {
    if ($("#AreaChart").length) {
      var ctx = document.getElementById("AreaChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Google",
              data: [0, 30, 60, 25, 60, 25, 50, 10, 60, 30, 80, 0],
              backgroundColor: "rgba(0, 140, 255, 0.77)",
              borderColor: "#008cff",
              borderWidth: 1,
            },
            {
              label: "Facebook",
              data: [0, 60, 25, 80, 35, 75, 30, 55, 20, 60, 10, 0],
              backgroundColor: "rgba(255, 151, 0, 0.76)",
              borderColor: "#ff9700",
              borderWidth: 1,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
        },
      });
    }

    if ($("#lineChart").length) {
      var ctx = document.getElementById("lineChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "01 Apr",
            "02 Apr",
            "03 Apr",
            "04 Apr",
            "05 Apr",
            "06 Apr",
            "07 Apr",
            "08 Apr",
            "09 Apr",
            "10 Apr",
            "11 Apr",
            "12 Apr",
            "13 Apr",
            "14 Apr",
            "15 Apr",
            "16 Apr",
            "17 Apr",
            "18 Apr",
            "19 Apr",
            "20 Apr",
            "21 Apr",
            "22 Apr",
            "23 Apr",
            "24 Apr",
            "25 Apr",
            "26 Apr",
            "27 Apr",
            "28 Apr",
            "29 Apr",
            "30 Apr",
          ],
          datasets: [
            {
              label: "Cash",
              data: [
                13, 20, 4, 18, 7, 4, 8, 11, 15, 25, 45, 40, 50, 55, 65, 50, 60,
                70, 30, 20, 40, 45, 65, 70, 90, 60, 40, 30, 20, 80,
              ],
              backgroundColor: "transparent",
              borderColor: "#C84347",
              borderWidth: 2,
              pointRadius: 0,
            },
            {
              label: "Online",
              data: [
                3, 30, 6, 6, 3, 4, 20, 25, 30, 40, 35, 45, 50, 55, 60, 30, 60,
                11, 15, 25, 45, 40, 50, 55, 65, 50, 60, 70, 30, 60,
              ],
              backgroundColor: "transparent",
              borderColor: "#173A72",
              borderWidth: 2,
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                display: true,
                gridLines: {
                  // display: false,
                  drawOnChartArea: false,
                },
              },
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  // display: false,
                  drawOnChartArea: false,
                },
                ticks: {
                  // Include a dollar sign in the ticks
                  callback: function (value, index, ticks) {
                    return "$ " + value + " K";
                  },
                },
              },
            ],
          },
          // maintainAspectRatio: false,
        },
      });
    }

    if ($("#barChart").length) {
      var ctx = document.getElementById("barChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          datasets: [
            {
              label: "Goal",
              data: [65, 59, 80, 81, 65, 59, 80, 81, 59, 80, 81, 65],
              backgroundColor: "#173a72",
            },
            {
              label: "Pending Goal",
              data: [28, 48, 40, 19, 28, 48, 40, 19, 40, 19, 28, 48],
              backgroundColor: "#c84347",
            },
            {
              label: "Revenue",
              data: [28, 48, 40, 19, 28, 48, 40, 19, 40, 19, 28, 48],
              backgroundColor: "#fdce0d",
            },
          ],
        },
        options: {
          // maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barPercentage: 0.5,
              },
            ],
          },
          legend: {
            position: "bottom",
          },
        },
      });
    }

    if ($("#HorizontalbarChart").length) {
      var ctx = document.getElementById("HorizontalbarChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "horizontalBar",
        data: {
          labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
          datasets: [
            {
              label: "Google",
              data: [13, 20, 4, 18, 29, 25, 8],
              backgroundColor: "#223035",
            },
            {
              label: "Facebook",
              data: [31, 30, 6, 6, 21, 4, 11],
              backgroundColor: "#ff9700",
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barPercentage: 0.5,
              },
            ],
          },
        },
      });
    }

    if ($("#StackedbarChart").length) {
      var ctx = document.getElementById("StackedbarChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Google",
              data: [65, 59, 80, 81, 65, 59, 80, 81, 59, 80, 81, 65],
              backgroundColor: "#fd3550",
            },
            {
              label: "Facebook",
              data: [28, 48, 40, 19, 28, 48, 40, 19, 40, 19, 28, 48],
              backgroundColor: "#15ca20",
            },
            {
              label: "Twitter",
              data: [35, 50, 75, 50, 60, 35, 25, 40, 55, 45, 35, 50],
              backgroundColor: "#008cff",
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true,
                barPercentage: 0.3,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
        },
      });
    }

    if ($("#radarChart").length) {
      var ctx = document.getElementById("radarChart");
      var myChart = new Chart(ctx, {
        type: "radar",
        data: {
          labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
          datasets: [
            {
              label: "Twitter",
              backgroundColor: "rgba(34, 48, 53, 0.5)",
              borderColor: "#223035",
              data: [13, 20, 4, 18, 29, 25, 8],
            },
            {
              label: "Linkedin",
              backgroundColor: "rgba(255, 151, 0, 0.5)",
              borderColor: "#ff9700",
              data: [31, 30, 6, 6, 21, 4, 11],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            position: "bottom",
            display: true,
            labels: {
              boxWidth: 40,
            },
          },
        },
      });
    }

    if ($("#polarChart").length) {
      var ctx = document.getElementById("polarChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "polarArea",
        data: {
          labels: ["Primary", "Success", "Danger", "Warning"],
          datasets: [
            {
              backgroundColor: ["#008cff", "#15ca20", "#fd3550", "#ff9700"],
              data: [13, 20, 11, 18],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            position: "bottom",
            display: true,
            labels: {
              boxWidth: 40,
            },
          },
        },
      });
    }

    if ($("#pieChart").length) {
      var ctx = document.getElementById("pieChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Info", "Dark", "Danger", "Secondary", "Success", "Warning"],
          datasets: [
            {
              backgroundColor: [
                "#0dceec",
                "#223035",
                "#fd3550",
                "#75808a",
                "#15ca20",
                "#ff9700",
              ],
              data: [20, 20, 20, 20, 20, 20],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            position: "bottom",
            display: true,
            labels: {
              boxWidth: 40,
            },
          },
        },
      });
    }

    if ($("#doughnutChart").length) {
      var ctx = document.getElementById("doughnutChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Info", "Dark", "Danger", "Secondary", "Success", "Warning"],
          datasets: [
            {
              backgroundColor: [
                "#0dceec",
                "#223035",
                "#fd3550",
                "#75808a",
                "#15ca20",
                "#ff9700",
              ],
              data: [20, 20, 20, 20, 20, 20],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            position: "bottom",
            display: true,
            labels: {
              boxWidth: 40,
            },
          },
        },
      });
    }
  });
})(window, document, window.jQuery);
