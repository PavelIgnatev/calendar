import React, { useCallback, useContext } from 'react';
import moment from 'moment';
import cx from 'classnames';

import { b } from '../Calendar';
import CalendarContext from '../context/context';
import {
  FORMAT_ISO_8601,
  INITAL_DATE,
  INITIAL_MONTH,
  INITIAL_YEAR,
} from '../../../shared/constants/calendar';

export interface CalendarSliderProps {
  className?: string;
}

moment.locale('ru');

const CalendarSlider = (props: CalendarSliderProps) => {
  const { className } = props;
  const { calendarStateForm, setCalendarStateForm } =
    useContext(CalendarContext);

  const [year, month] = calendarStateForm.date.split('-');
  const currentNumberMonths = Number(month || INITIAL_MONTH) - 1;
  const currentYear = year || INITIAL_YEAR;
  const momentDate = moment(calendarStateForm.date);

  const handleClick = useCallback(
    (date: moment.Moment) => {
      setCalendarStateForm((v) => ({
        ...v,
        date: date.isValid() ? date.format(FORMAT_ISO_8601) : INITAL_DATE,
      }));
    },
    [setCalendarStateForm],
  );

  return (
    <div className={cx(b('slider'), className)}>
      <div
        className={b('slider-prev')}
        onClick={() => handleClick(momentDate.subtract({ month: 1 }))}
        aria-hidden="true"
      />
      <div className={b('slider-wrapper')}>
        <div className={b('slider-month')}>
          {moment.months()[currentNumberMonths]}
        </div>
        <div className={b('slider-year')}>{currentYear}</div>
      </div>
      <div
        className={b('slider-next')}
        onClick={() => handleClick(momentDate.add({ month: 1 }))}
        aria-hidden="true"
      />
    </div>
  );
};

export default CalendarSlider;
