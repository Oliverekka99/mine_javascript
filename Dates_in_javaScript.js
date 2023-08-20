// Internally time is stored as number of milliseconds since 1 Jan 1970
// Creating a date object
// get right now
const now = new Date();

// set a specific data and time
// month counting starts with zero!
const randomDate = new Date(2015,3,12,6,25,58);

// set a specific date - time set to midnight
const win95Launch = new Date(1995, 7, 24);

console.log(randomDate);
console.log(win95Launch);
console.log(now);

// Setting Values
// now.setFullYear(2014); //sets year
// now.setMonth(0); //January (counting starts at zero)
// now.setDate(4); //sets day

// now.setHours(4); //24 hour clock
// now.setMinutes(24);
// now.setSeconds(46);
// console.log(now);

// Getting Values
// all of the set functions have get
console.log(now.getMonth());
// milliseconds since 1 Jan 1970
console.log(now.getTime());
// day of the week (Sunday = 0)
console.log(now.getDay());