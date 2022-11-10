import { useEffect, useState } from 'react';
import { date } from 'yup';
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
      maskFill: 'rgba(0, 180, 50, 0.3)',
      xAxis: {
        tickAmount: 10,
        breaks: {
          from: Date.now() - 3600000,
          to: Date.now(),
        },
      },

      // stickToMax: true,
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
      // dateFormat: 'dd/mm/YYYY',
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
