import React, { useCallback, useState, useMemo } from 'react';
import cx from 'classnames';
import { noop } from 'lodash';
import b_ from 'b_';

import CalendarSlider from './Slider';
import CalendarTable from './Table';
import CalendarForm from './Form';
import CalendarContext, { CalendarState } from './context/context';
import { DEFAULT_CALENDAR_STATE_FORM } from '../../shared/constants/calendar';

import './Calendar.scss';

export interface CalendarProps {
  onChange?: (state: CalendarState) => void;
}

export const b = b_.with('calendar');

const Calendar = (props: CalendarProps) => {
  const { onChange = noop } = props;

  const [calendarState, setCalendarState] = useState<CalendarState>({});
  const [calendarStateForm, setCalendarStateForm] = useState(
    DEFAULT_CALENDAR_STATE_FORM,
  );

  const handleChange = useCallback(
    (state: CalendarState) => {
      onChange(state);
      setCalendarState(state);
    },
    [onChange],
  );

  const context = useMemo(
    () => ({
      calendarState,
      calendarStateForm,
      setCalendarState: handleChange,
      setCalendarStateForm,
    }),
    [calendarState, calendarStateForm, handleChange, setCalendarStateForm],
  );

  return (
    <CalendarContext.Provider value={context}>
      <h3 className={cx(b('title'))}>Календарь</h3>
      <div className={b('wrapper')}>
        <div className={b('content')}>
          <CalendarSlider />
          <CalendarTable />
        </div>
        <CalendarForm />
      </div>
    </CalendarContext.Provider>
  );
};

export default Calendar;
