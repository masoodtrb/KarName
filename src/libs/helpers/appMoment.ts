import jMoment from 'moment-jalaali';

jMoment.loadPersian({
  usePersianDigits: true,
});

export const appMoment = jMoment;
