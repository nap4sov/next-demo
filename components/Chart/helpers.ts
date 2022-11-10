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
