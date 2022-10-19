import { noop } from 'lodash';
import moment from 'moment';
import React, { Dispatch, SetStateAction } from 'react';
import getDate from '../../../helpers/getDate';

export interface CalendarFormState {
  date: string;
  subtitle: string;
  description: string;
}

export type CalendarState = Record<string, Record<string, CalendarFormState>>;
export type CalendarFormStateNames = keyof CalendarFormState;

interface ContextInterface {
  calendarState?: CalendarState;
  calendarStateForm: CalendarFormState;
  setCalendarState: (state: CalendarState) => void;
  setCalendarStateForm: Dispatch<SetStateAction<CalendarFormState>>;
}

export const FORMAT_ISO = 'DD-MM-YYYY';
export const FORMAT_ISO_8601 = 'YYYY-MM-DD';
export const INITIAL_YEAR = moment().isoWeekYear();
export const INITIAL_MONTH = Number(moment().format('MM'));
export const INITAL_DATE = moment(getDate(Date.now()), FORMAT_ISO).format(
  FORMAT_ISO_8601,
);

export const DEFAULT_CALENDAR_STATE_FORM = {
  date: INITAL_DATE,
  subtitle: '',
  description: '',
};

const CalendarContext = React.createContext<ContextInterface>({
  calendarState: {},
  calendarStateForm: DEFAULT_CALENDAR_STATE_FORM,
  setCalendarState: noop,
  setCalendarStateForm: noop,
});

export default CalendarContext;
