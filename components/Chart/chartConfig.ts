import { useEffect, useState } from 'react';

import { PriceData } from './types';

export const useChart = (data: PriceData) => {
  const config = {
    accessibility: {
      enabled: false,
    },
    time: {
      timezoneOffset: -120,
    },
    chart: {
      type: 'spline',
      // events: {
      //   redraw: ({ target }) => {
      //     console.log(target.data.columns);
      //   },
      // },

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
      // maskFill: 'rgba(0, 180, 50, 0.3)',
      // stickToMax: true,
      enabled: false,
    },
    rangeSelector: {
      enabled: false,
    },

    title: {
      text: 'BTC/USD',
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

    data: {
      rows: data,
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
  const [chartData, setChartData] = useState<(number | number)[]>([]);

  useEffect(() => {
    if (!chartData[0]) return;

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
