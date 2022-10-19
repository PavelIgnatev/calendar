const getDate = (ms: number) => {
  return new Date(ms)
    .toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    })
    .replaceAll('.', '-');
};

export default getDate;
