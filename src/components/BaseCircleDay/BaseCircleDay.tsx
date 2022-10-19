import React from 'react';
import moment from 'moment';
import b_ from 'b_';

import getDate from '../../shared/helpers/getDate';

import './BaseCircleDay.scss';

const b = b_.with('base-circle-day');

export interface BaseCircleDayProps {
  day: string;
  currentDay: string;
}

const BaseCircleDay = (props: BaseCircleDayProps) => {
  const { day, currentDay } = props;

  const dayNow = getDate(Date.now());
  const momentDay = moment(day, 'DDMMYYYY');
  const currentMomentDay = moment(dayNow, 'DDMMYYYY');
  const calendarMomentDay = moment(currentDay);
  const dayNumber = momentDay.isoWeekday();

  return (
    <div
      className={b({
        prev: momentDay.isBefore(currentMomentDay, 'day'),
        next: momentDay.isAfter(currentMomentDay, 'day'),
        weekends: dayNumber === 6 || dayNumber === 7,
        now: momentDay.isSame(currentMomentDay, 'day'),
        checked: momentDay.isSame(calendarMomentDay, 'day'),
      })}
    >
      {Number(day.split('-')[0])}
    </div>
  );
};

export default BaseCircleDay;
