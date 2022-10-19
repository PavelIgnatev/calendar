import React from 'react';
import cx from 'classnames';

import { b } from '../../Calendar';

export interface CalendarTableHeadProps {
  className?: string;
}

const CalendarTableHead = (props: CalendarTableHeadProps) => {
  const { className } = props;

  return (
    <div className={cx(b('table-head'), className)}>
      <div className={b('table-head', { ceil: true })}>Mon</div>
      <div className={b('table-head', { ceil: true })}>Tue</div>
      <div className={b('table-head', { ceil: true })}>Wed</div>
      <div className={b('table-head', { ceil: true })}>Thu</div>
      <div className={b('table-head', { ceil: true })}>Fri</div>
      <div className={b('table-head', { ceil: true })}>Sat</div>
      <div className={b('table-head', { ceil: true })}>Sun</div>
    </div>
  );
};

export default CalendarTableHead;
