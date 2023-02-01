const parseDate = (date) => {
  const time = date.substring(11,16);
  const year = date.substring(0, 4);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[parseInt(date.substring(5, 7) - 1)];
  return { time, year, month };
};

export default parseDate;