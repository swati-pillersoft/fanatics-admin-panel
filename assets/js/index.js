$(function () {
  "use strict";

  // chart 1
  if ($("#dashboard-chart-1").length > 0) {
    var ctx = document.getElementById("dashboard-chart-1").getContext("2d");

    // var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
    // gradientStroke1.addColorStop(0, "#173a72");
    // gradientStroke1.addColorStop(1, "#173a72");

    // var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
    // gradientStroke2.addColorStop(0, "#ff8359");
    // gradientStroke2.addColorStop(1, "#ffdf40");

    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "01 Apr",
          "02 Apr",
          "04 Apr",
          "07 Apr",
          "10 Apr",
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
          "25 Apr",
          "28 Apr",
        ],
        datasets: [
          {
            label: "Revenue",
            data: [
              500, 380, 200, 400, 120, 450, 900, 950, 270, 1200, 1390, 300, 500,
              600, 200, 1000, 600,
            ],
            backgroundColor: "#173A72",
            // borderWidth: 2,
            // borderRadius: 0,
            // borderSkipped: false,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "April 2022",
                fontSize: 20,
              },
              gridLines: {
                drawOnChartArea: false,
                // display: false,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                drawOnChartArea: false,
                // display: false,
              },
            },
          ],
        },
      },
    });
  }

  // chart 2
  if ($("#dashboard-chart-2").length > 0) {
    var ctx = document.getElementById("dashboard-chart-2").getContext("2d");

    var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientStroke1.addColorStop(0, "#fc4a1a");
    gradientStroke1.addColorStop(1, "#f7b733");

    var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientStroke2.addColorStop(0, "#4776e6");
    gradientStroke2.addColorStop(1, "#8e54e9");

    var gradientStroke3 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientStroke3.addColorStop(0, "#ee0979");
    gradientStroke3.addColorStop(1, "#ff6a00");

    var gradientStroke4 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientStroke4.addColorStop(0, "#42e695");
    gradientStroke4.addColorStop(1, "#3bb2b8");

    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Jeans", "T-Shirts", "Shoes", "Lingerie"],
        datasets: [
          {
            backgroundColor: [
              gradientStroke1,
              gradientStroke2,
              gradientStroke3,
              gradientStroke4,
            ],
            hoverBackgroundColor: [
              gradientStroke1,
              gradientStroke2,
              gradientStroke3,
              gradientStroke4,
            ],
            data: [25, 80, 25, 25],
            borderWidth: [1, 1, 1, 1],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        cutoutPercentage: 75,
        legend: {
          position: "bottom",
          display: true,
          labels: {
            boxWidth: 8,
          },
        },
        tooltips: {
          displayColors: false,
        },
      },
    });
  }

  // worl map

  jQuery("#dashboard-map").vectorMap({
    map: "world_mill_en",
    backgroundColor: "transparent",
    borderColor: "#818181",
    borderOpacity: 0.25,
    borderWidth: 1,
    zoomOnScroll: false,
    color: "#009efb",
    regionStyle: {
      initial: {
        fill: "#008cff",
      },
    },
    markerStyle: {
      initial: {
        r: 9,
        fill: "#fff",
        "fill-opacity": 1,
        stroke: "#000",
        "stroke-width": 5,
        "stroke-opacity": 0.4,
      },
    },
    enableZoom: true,
    hoverColor: "#009efb",
    markers: [
      {
        latLng: [21.0, 78.0],
        name: "Lorem Ipsum Dollar",
      },
    ],
    hoverOpacity: null,
    normalizeFunction: "linear",
    scaleColors: ["#b6d6ff", "#005ace"],
    selectedColor: "#c9dfaf",
    selectedRegions: [],
    showTooltip: true,
  });

  // chart 3
  if ($("#dashboard-chart-3").length > 0) {
    var ctx = document.getElementById("dashboard-chart-3").getContext("2d");

    var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientStroke1.addColorStop(0, "#008cff");
    gradientStroke1.addColorStop(1, "rgba(22, 195, 233, 0.1)");

    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Revenue",
            data: [3, 30, 10, 10, 22, 12, 5],
            pointBorderWidth: 2,
            pointHoverBackgroundColor: gradientStroke1,
            backgroundColor: gradientStroke1,
            borderColor: gradientStroke1,
            borderWidth: 3,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          position: "bottom",
          display: false,
        },
        tooltips: {
          displayColors: false,
          mode: "nearest",
          intersect: false,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
      },
    });
  }

  // chart 4
  if ($("#dashboard-chart-4").length > 0) {
    var dashboardChart4 = c3.generate({
      bindto: "#dashboard-chart-4",
      size: {
        height: 250,
        width: 250,
      },
      data: {
        columns: [
          ["Total Income", 67],
          ["Cash Deposit", 33],
        ],
        colors: {
          "Total Income": "#173a72",
          "Cash Deposit": "#fdce0d",
        },
        type: "donut",
      },
      donut: {
        title: "67%",
      },
      axis: {
        y: {
          label: {
            text: "Total Income",
          },
        },
        x: {
          label: {
            text: "Cash Deposit",
          },
        },
      },
      legend: {
        hide: true,
      },
    });
    $(window).on("sidebarToggled", function () {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
        dashboardChart4.resize();
      }, 500);
    });

    $(document).ready(function () {
      dashboardChart4.resize();
    });
    // var ctx = document.getElementById("dashboard-chart-4").getContext("2d");

    // var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
    // gradientStroke1.addColorStop(0, "#173a72");
    // gradientStroke1.addColorStop(1, "#173a72");

    // var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
    // gradientStroke2.addColorStop(0, "#173a72");
    // gradientStroke2.addColorStop(1, "#173a72");

    // var gradientStroke3 = ctx.createLinearGradient(0, 0, 0, 300);
    // gradientStroke3.addColorStop(0, "#fdce0d");
    // gradientStroke3.addColorStop(1, "#fdce0d");

    // var myChart = new Chart(ctx, {
    //   type: "pie",
    //   data: {
    //     datasets: [
    //       {
    //         backgroundColor: [
    //           gradientStroke1,
    //           gradientStroke2,
    //           gradientStroke3,
    //         ],

    //         hoverBackgroundColor: [
    //           gradientStroke1,
    //           gradientStroke2,
    //           gradientStroke3,
    //         ],

    //         data: [50, 50, 50],
    //         borderWidth: [1, 1, 1],
    //       },
    //     ],
    //   },
    //   options: {
    //     maintainAspectRatio: false,
    //     cutoutPercentage: 0,
    //     legend: {
    //       position: "bottom",
    //       display: true,
    //       labels: {
    //         boxWidth: 8,
    //       },
    //     },
    //     tooltips: {
    //       displayColors: false,
    //     },
    //   },
    // });
  }

  // chart 5

  if ($("#dashboard-chart-5").length > 0) {
    var ctx = document.getElementById("dashboard-chart-5").getContext("2d");

    var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientStroke1.addColorStop(0, "#f54ea2");
    gradientStroke1.addColorStop(1, "#ff7676");

    var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
    gradientStroke2.addColorStop(0, "#42e695");
    gradientStroke2.addColorStop(1, "#3bb2b8");

    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [
          {
            label: "Clothing",
            data: [40, 30, 60, 35, 60, 25, 50, 40],
            borderColor: gradientStroke1,
            backgroundColor: gradientStroke1,
            hoverBackgroundColor: gradientStroke1,
            pointRadius: 0,
            fill: false,
            borderWidth: 1,
          },
          {
            label: "Electronic",
            data: [50, 60, 40, 70, 35, 75, 30, 20],
            borderColor: gradientStroke2,
            backgroundColor: gradientStroke2,
            hoverBackgroundColor: gradientStroke2,
            pointRadius: 0,
            fill: false,
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          position: "bottom",
          display: true,
          labels: {
            boxWidth: 8,
          },
        },
        scales: {
          xAxes: [
            {
              barPercentage: 0.5,
            },
          ],
        },
        tooltips: {
          displayColors: false,
        },
      },
    });
  }
});
