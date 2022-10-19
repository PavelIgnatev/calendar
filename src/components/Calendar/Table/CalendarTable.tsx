import React, { useContext } from 'react';
import cx from 'classnames';

import { b } from '../Calendar';
import useCalendarDaysOfWeek from '../../../hooks/useCalendarDaysOfWeek';
import CalendarTableHead from './Head';
import CalendarTableBody from './Body';
import CalendarContext, {
  INITIAL_MONTH,
  INITIAL_YEAR,
} from '../context/context';

export interface CalendarTableProps {
  className?: string;
}

const CalendarTable = (props: CalendarTableProps) => {
  const { className } = props;

  const { calendarStateForm } = useContext(CalendarContext);
  const [year, month] = calendarStateForm.date.split('-');

  const calendarDaysOfWeek = useCalendarDaysOfWeek(
    Number(year || INITIAL_YEAR),
    Number(month || INITIAL_MONTH) - 1,
  );

  return (
    <div className={cx(b('table'), className)}>
      <CalendarTableHead />

      {calendarDaysOfWeek.map((daysOfWeek) => (
        <CalendarTableBody
          key={JSON.stringify(daysOfWeek)}
          daysOfWeek={daysOfWeek}
        />
      ))}
    </div>
  );
};

export default CalendarTable;
