import moment from 'moment';

const useCalendarDaysOfWeek = (year: number, month: number) => {
  const calendar = [];

  const startDate = moment([year, month])
    .clone()
    .startOf('month')
    .startOf('week')
    .isoWeekday(1);

  const endDate = moment([year, month]).clone().endOf('month');

  const day = startDate.clone().subtract(1, 'day');

  while (day.isBefore(endDate, 'day')) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, 'day').clone().format('DD-MM-YYYY')),
    );
  }

  return calendar;
};

export default useCalendarDaysOfWeek;
