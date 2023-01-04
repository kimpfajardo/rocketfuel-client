export const config = {
  chart: {
    type: "line",
    scrollablePlotArea: {
      minWidth: 3500,
      scrollPositionX: 3,
    },
    parallelCoordinates: true,
    width: 500
  },
  plotOptions: {
    area: {
      marker: {
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
    series: {
      point: {
        events: {
          click: (e: any) => {
            const category = e.point.category;
            const value = e.point.y;
            // console.log("click event", category, value);
          },
        },
      },
    },
  },
  legend: {
    enabled: false,
  },
  title: "",
  series: [
    {
      data: [
        0, 4200, 5700, 7550, 8021, 11780, 3600, 6931, 12210, 13220, 15051,
        16100,
      ],
      zoneAxis: "x",
      zones: [
        {
          value: 10,
        },
        {
          dashStyle: "dash",
        },
      ],
    },
  ],
  xAxis: [
    {
      lineWidth: 1,
      title: {},
      opposite: true,
      categories: [
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
      max: 11,
      labels: {
        style: {
          fontSize: "14px",
          fontFamily: "Inter",
          // padding: "100px 0",
          // height: "57px",
        },
      },
      gridLineWidth: 1,
      gridLineColor: "#CBDAE2",
      padding: 5,
    },
  ],
  yAxis: {
    title: {
      text: "",
    },
    labels: {
      format: "${text}",
      style: {
        fontSize: "12px",
        fontFamily: "Inter",
        whiteSpace: "nowrap",
        textAlign: "center",
      },
    },
    tickAmount: 5,
    gridLineWidth: 1,
    gridLineColor: "#CBDAE2",
  },
  tooltip: {
    snap: 1,
  },
  annotations: {
    shapes: [
      {
        snap: 1,
      },
    ],
  },
};