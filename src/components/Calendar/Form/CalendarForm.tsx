import React, { useCallback, useContext } from 'react';
import cx from 'classnames';

import { b } from '..';
import BaseInput from '../../BaseInput';
import BaseTextarea from '../../BaseTextarea';
import BaseButton from '../../BaseButton';
import CalendarContext, { CalendarFormStateNames } from '../context/context';

export interface CalendarFormProps {
  className?: string;
}

const CalendarForm = (props: CalendarFormProps) => {
  const { className } = props;

  const {
    calendarState,
    calendarStateForm,
    setCalendarStateForm,
    setCalendarState,
  } = useContext(CalendarContext);

  const handleChangeCalendarStateForm = useCallback(
    (name: CalendarFormStateNames, value: string) => {
      setCalendarStateForm({ ...calendarStateForm, [name]: value });
    },
    [calendarStateForm, setCalendarStateForm],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { date } = calendarStateForm;
      const { length } = Object.keys(calendarState?.[date] ?? []);

      if (length >= 2) {
        alert(
          'The maximum number of daily events has been reached, add this event to another day of the month',
        );
      } else {
        setCalendarState({
          ...calendarState,
          [date]: {
            ...calendarState?.[date],
            [String(Math.random()).substr(2, 12)]: calendarStateForm,
          },
        });
        setCalendarStateForm({
          ...calendarStateForm,
          subtitle: '',
          description: '',
        });
      }
    },
    [calendarState, calendarStateForm, setCalendarState, setCalendarStateForm],
  );

  return (
    <form className={cx(b('form'), className)} onSubmit={handleSubmit}>
      <h3 className={b('form-title')}>Добавить событие</h3>
      <BaseInput
        name="date"
        className={b('form-input')}
        value={calendarStateForm.date}
        onChange={handleChangeCalendarStateForm}
      />
      <BaseInput
        name="subtitle"
        className={b('form-input')}
        placeholder="Укажите краткое название"
        value={calendarStateForm.subtitle}
        onChange={handleChangeCalendarStateForm}
      />
      <BaseTextarea
        name="description"
        className={b('form-textarea')}
        placeholder="Введите описание"
        value={calendarStateForm.description}
        onChange={handleChangeCalendarStateForm}
      />
      <BaseButton
        className={b('form-button')}
        disabled={!Object.values(calendarStateForm).every(Boolean)}
      >
        Добавить
      </BaseButton>
    </form>
  );
};

export default CalendarForm;
