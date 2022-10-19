import React, { useContext, useCallback } from 'react';
import cx from 'classnames';
import moment from 'moment';

import { b } from '../../Calendar';
import BaseCircleDay from '../../../BaseCircleDay';
import CalendarContext, {
  FORMAT_ISO,
  FORMAT_ISO_8601,
} from '../../context/context';
import BasePill from '../../../BasePill';

export interface CalendarTableBodyProps {
  daysOfWeek: Array<string>;
  className?: string;
}

const CalendarTableBody = (props: CalendarTableBodyProps) => {
  const { daysOfWeek, className } = props;

  const { calendarState, calendarStateForm, setCalendarStateForm } =
    useContext(CalendarContext);

  const formatDate = (day: string) =>
    moment(day, FORMAT_ISO).format(FORMAT_ISO_8601);

  const handleCeilClick = useCallback(
    (day: string) => {
      setCalendarStateForm((v) => ({
        ...v,
        date: formatDate(day),
      }));
    },
    [setCalendarStateForm],
  );

  const handlePillClick = useCallback(
    (day: string, id: string) => {
      console.log(`Уникальный id событий, по которому произошел клик: ${id}`);
      console.log(
        `События за день ${formatDate(day)}: ${JSON.stringify(
          calendarState?.[formatDate(day)],
        )}`,
      );
      console.log(
        `Событие по уникальному id ${id} : ${JSON.stringify(
          calendarState?.[formatDate(day)]?.[id],
        )}`,
      );
    },
    [calendarState],
  );

  return (
    <div className={cx(b('table-body'), className)}>
      {daysOfWeek.map((day) => {
        const pills = calendarState?.[formatDate(day)];

        return (
          <div
            key={day}
            className={b('table-body', { ceil: true })}
            onClick={() => handleCeilClick(day)}
            aria-hidden="true"
          >
            <BaseCircleDay day={day} currentDay={calendarStateForm.date} />
            <div className={b('body-pill')}>
              {Object.keys(pills ?? {}).map((id) => (
                <BasePill key={id} id={id} day={day} onClick={handlePillClick}>
                  {pills?.[id]?.subtitle}
                </BasePill>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarTableBody;
