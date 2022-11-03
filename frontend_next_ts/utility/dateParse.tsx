export function dateToIndonesia(date: Date) {
  let newDate = new Date(date);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  // const monthNames = [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'August',
  //     'September',
  //     'October',
  //     'November',
  //     'December',
  // ];

  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  return monthNames[month] + ' ' + year;
  // return date;
}
