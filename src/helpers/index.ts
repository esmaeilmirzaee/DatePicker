// Functions
export const getDate: getDateType = (
  requiredDate = new Date(),
  timezone = "default"
) => {
  /** It ends in NaN. Why? */
  // let hour = +new Intl.DateTimeFormat(timezone, {
  // hour: "numeric"
  // }).format(requiredDate);
  let hour = new Date(requiredDate).getHours();

  let minute = +new Intl.DateTimeFormat(timezone, {
    minute: "numeric"
  }).format(requiredDate);

  let second = +new Intl.DateTimeFormat(timezone, {
    second: "numeric"
  }).format(requiredDate);

  let day = +new Intl.DateTimeFormat(timezone, {
    day: "numeric"
  }).format(requiredDate);

  let month = Object.assign(
    {},
    {
      long: `${new Intl.DateTimeFormat(timezone, {
        month: "long"
      }).format(requiredDate)}`
    },
    {
      short: `${new Intl.DateTimeFormat(timezone, {
        month: "short"
      }).format(requiredDate)}`
    },
    {
      numeric: +new Intl.DateTimeFormat(timezone, {
        month: "numeric"
      }).format(requiredDate)
    }
  );

  let year = +new Intl.DateTimeFormat(timezone, {
    year: "numeric"
  }).format(requiredDate);

  let weekday = Object.assign(
    {},
    {
      long: `${new Intl.DateTimeFormat(timezone, {
        weekday: "long"
      }).format(requiredDate)}`
    },
    {
      short: `${new Intl.DateTimeFormat(timezone, {
        weekday: "short"
      }).format(requiredDate)}`
    }
  );
  return { year, month, day, hour, minute, second, weekday };
};

export const daysOfMonth: daysInAMonthType = (month, year) => {
  if (`${year}`.length > 4 || `${month}`.length < 0)
    return { count: -1, start: -1 };
  let d = new Date(year, Number(month), 0);
  let p = new Date(year, Number(month) - 1, 1);

  // The getDay() method returns the day of the week (from 0->Sunday to 6:Saturday) for the specified date.
  return { count: d.getDate(), start: p.getDay() };
};

export const getMonth = (year: number, numericMonth: monthType) => {
  let monthInADay = daysOfMonth(numericMonth, year);
  let month: number[][] = [];
  let week: number[] = [];

  for (let i = 0; i < monthInADay.start; i++) {
    week.unshift(monthInADay.count - i);
  }

  for (let i = 1; i <= monthInADay.count; i++) {
    week.push(i);
    if (week.length === 7) {
      month.push(week);
      week = [];
    }
  }
  if (week.length < 7) {
    for (let i = 0; week.length < 7; i++) {
      week.push(i + 1);
    }
  }
  month.push(week);

  return month;
};

export const getNext = (date: DateType, past: boolean = false) => {
  if (past) {
    if (date.month.numeric - 2 === 0) {
      date.month.numeric = 12;
      date.year -= 1;
    } else {
      date.month.numeric -= 2;
    }
  } else {
    if (date.month.numeric >= 12) {
      date.month.numeric = 0;
      date.year += 1;
    }
  }

  return getDate(
    new Date(
      date.year,
      date.month.numeric,
      date.day,
      date.hour,
      date.minute,
      date.second
    )
  );
};
