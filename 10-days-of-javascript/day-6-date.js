"use strict"

/**
 * Day 6: Date
 * Given a dateString, in the format MM/DD/YYYY, find and return
 * the day name for that date. Each day name must be one of the
 * following strings: Sunday, Monday, Tuesday, Wednesday, Thursday,
 * Friday, or Saturday. For example, the day name for the date
 * 12/07/2016 is Wednesday.
 * @param {string} dateString
 */

function getDayName(dateString) {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  let date = new Date(dateString)
  return days[date.getDay()];
}

function main() {
  const d = ['10/11/2009', '11/10/2010'];
  for (let i = 0; i < d; i++) {
    console.log(getDayName(d[i]));
  }
}