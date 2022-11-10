import { useEffect, useMemo, useState } from 'react';

export const useChart = (data = [Date.now() - 10000, 16500]) => {
  const config = {
    accessibility: {
      enabled: false,
    },
    chart: {
      type: 'spline',
      //   events: {
      //     redraw: ({ target }) => {
      //       console.log(target);
      //     },
      //   },

      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      plotBackgroundColor: 'transparent',
      className: 'chart',
      width: 900,
      height: 500,
    },
    plotOptions: {
      spline: {
        color: '#0070f3',
      },
    },
    navigator: {
      maskFill: 'rgba(0, 180, 50, 0.3)',
      stickToMax: true,
    },
    rangeSelector: {
      enabled: false,
    },

    title: {
      text: 'BTC/USD',
    },
    subTitle: {
      text: 'Price movement updated each second',
    },
    yAxis: {
      title: {
        text: 'Price',
      },
      height: '80%',
      resize: {
        enabled: true,
      },
    },
    xAxis: {},

    data: {
      rows: [data],
      dateFormat: 'dd/mm/YYYY',
      firstRowAsNames: false,
    },
    series: [
      {
        type: 'spline',
        name: 'BTC price',
      },
    ],
  };

  const [chartOptions, setOptions] = useState(config);
  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    setOptions(prev => {
      return {
        ...prev,
        data: {
          ...prev.data,
          rows: [...prev.data.rows, chartData],
        },
      };
    });
  }, [chartData]);

  return { chartOptions, setChartData };
};
