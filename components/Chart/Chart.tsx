import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import highchartsData from 'highcharts/modules/data';
import { useEffect, useState } from 'react';
import { useChart } from './chartConfig';
import useWebSocket from 'react-use-websocket';
import { PriceData } from './types';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
  highchartsData(Highcharts);
}

export const Chart: React.FC<{ data: PriceData }> = ({ data }) => {
  const [date, setDate] = useState(Date.now());
  const { chartOptions, setChartData } = useChart(data);

  const { sendJsonMessage, lastJsonMessage } = useWebSocket(
    'wss://ws.eodhistoricaldata.com/ws/crypto?api_token=demo',
    {
      filter: () => {
        if (Date.now() - date < 5000) return false;

        setDate(Date.now());
        return true;
      },
    },
  );

  useEffect(() => {
    sendJsonMessage({ action: 'subscribe', symbols: 'BTC-USD' });

    return () => sendJsonMessage({ action: 'unsubscribe', symbols: 'BTC-USD' });
  }, [sendJsonMessage]);

  useEffect(() => {
    if (!lastJsonMessage) return;

    const response = lastJsonMessage as {
      t: number;
      p: string;
    };

    const momentaryData = [response.t, Number(response.p)];

    setChartData(momentaryData);
  }, [lastJsonMessage, setChartData]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="stockChart"
      options={chartOptions}
    />
  );
};
