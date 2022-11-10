import {
  generateIsoDate,
  genereteCurrentIsoDate,
  dateHourAgo,
  formatIsoToMs,
} from './helpers';
import { IRatesResponse } from './types';

export const getAllRates = (): Promise<IRatesResponse[]> =>
  fetch(
    `https://rest.coinapi.io/v1/exchangerate/BTC/USD/history?period_id=30SEC&time_start=${generateIsoDate(
      dateHourAgo,
    )}&time_end=${genereteCurrentIsoDate(1000)}`,
    {
      headers: {
        'X-CoinAPI-Key': process.env.NEXT_PUBLIC_COINAPI_KEY || '',
      },
    },
  ).then(res => res.json());

export const getPriceData = async () => {
  const rates = await getAllRates();
  console.log(rates);

  return rates.map(rate => {
    const price = rate.rate_close;
    const time = rate.time_period_end;
    return [formatIsoToMs(time), price];
  });
};
