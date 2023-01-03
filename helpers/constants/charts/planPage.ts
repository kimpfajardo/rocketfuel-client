export const config = {
    chart: {
      type: "line",
      scrollablePlotArea: {
        minWidth: 3500,
        scrollPositionX: 3,
      },
      parallelCoordinates: true,
      style: {
        height: "100%",
        width: "100%",
      },
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
              console.log("I WAS CLICKED", category, value);
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
          0, 4200, 5700, 7550, 8021, 11780, 3600, 6931, 14210, 1220, 5051,
          16100,
        ],
        zoneAxis: "x",
        zones: [
          {
            value: 8,
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
            padding: "100px 0",
            height: "57px",
          },
        },
        gridLineWidth: 1,
        gridLineColor: "#CBDAE2",
        padding: 5,
      },
    ],
    yAxis: {
      // opposite: true
      title: {
        text: "",
      },
      labels: {
        format: "${text}",
        style: {
          fontSize: "12px",
          fontFamily: "Inter",
          whiteSpace: "nowrap",
          marginTop: "66px",
          marginBottom: "66px",
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