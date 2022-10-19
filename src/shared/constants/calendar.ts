import moment from 'moment';
import getDate from '../helpers/getDate';

export const FORMAT_ISO = 'DD-MM-YYYY';
export const FORMAT_ISO_8601 = 'YYYY-MM-DD';
export const INITIAL_YEAR = moment().isoWeekYear();
export const INITIAL_MONTH = Number(moment().format('MM'));
export const INITAL_DATE = moment(getDate(Date.now()), FORMAT_ISO).format(
  FORMAT_ISO_8601,
);

export const DEFAULT_CALENDAR_STATE_FORM = {
  date: INITAL_DATE,
  title: '',
  description: '',
};
