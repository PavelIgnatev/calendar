import { noop } from 'lodash';
import React, { Dispatch, SetStateAction } from 'react';

import { DEFAULT_CALENDAR_STATE_FORM } from '../../../shared/constants/calendar';

export interface CalendarFormState {
  date: string;
  title: string;
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

const CalendarContext = React.createContext<ContextInterface>({
  calendarState: {},
  calendarStateForm: DEFAULT_CALENDAR_STATE_FORM,
  setCalendarState: noop,
  setCalendarStateForm: noop,
});

export default CalendarContext;
