"use strict";
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const _HS_PER_DAY = 1000 * 60 * 60;
const _MINS_PER_DAY = 1000 * 60;
const _SECS_PER_DAY = 1000;

function getInterval(deadline) {
  const now = getToday();
  const diffStamp = Math.abs(deadline - now);

  return {
    days: Math.floor(diffStamp / _MS_PER_DAY),
    hours: Math.floor((diffStamp / _HS_PER_DAY) % 24),
    minutes: Math.floor((diffStamp / _MINS_PER_DAY) % 60),
    seconds: Math.floor((diffStamp / _SECS_PER_DAY) % 60),
    sign: deadline > now ? "positive" : "negative",
  };
}

export default getInterval;

// ?date=2021-03-25&time=9:00&gmt=-3:00&desc=FEC Meeting
const getDeadlineFromURL = () => {
  const parametersURL = new URLSearchParams(window.location.search);
  let deadlineFromURL = "";
  let deadline;

  const description = parametersURL.get("desc") || "WE´RE LAUNCHING SOON";

  deadlineFromURL = parametersURL.get("date") || "";
  deadlineFromURL += " ";
  deadlineFromURL += parametersURL.get("time") || "";
  deadlineFromURL += " ";
  deadlineFromURL += parametersURL.get("gmt") || "";

  // parametersURL.forEach((element) => (deadlineFromURL += ` ${element}`));
  console.log("deadlineFromURL:", deadlineFromURL);

  deadline = new Date(deadlineFromURL);

  if (!isValidDate(deadline)) {
    console.log("Invalid or nonexistent Date form URL.");
    deadline = addDays(getToday(), 14);
  }
  console.log("deadline parsed:", deadline);

  return { deadline, description };
};
export { getDeadlineFromURL };

const isValidDate = (d) => d instanceof Date && !isNaN(d);
const getToday = () => new Date();

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
