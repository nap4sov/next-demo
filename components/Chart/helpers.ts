import moment from 'moment';

export const dateHourAgo = Date.now() - 480000;

export const genereteCurrentIsoDate = (delay: number) =>
  moment(Date.now() - 7200000 - delay).format('YYYY-MM-DDTHH:mm:ss');

export const generateIsoDate = (date: number) =>
  moment(date - 7200000).format('YYYY-MM-DDTHH:mm:ss');

export const formatIsoToMs = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.getTime();
};

export const fallbackData = [
  [Date.now() - 300000, 17350.038133170932],
  [Date.now() - 270000, 17389.48250514957],
  [Date.now() - 240000, 17389.48250514957],
  [Date.now() - 210000, 17384.320300961415],
  [Date.now() - 180000, 17384.320300961415],
  [Date.now() - 150000, 17370.89600547635],
  [Date.now() - 120000, 17370.89600547635],
  [Date.now() - 90000, 17356.005599996824],
  [Date.now() - 60000, 17356.005599996824],
  [Date.now() - 30000, 17373.263097077175],
];
