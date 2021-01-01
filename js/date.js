var initialDate = new Date(2020, 1, 1, 2); // Dec 1st 2012
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay);

