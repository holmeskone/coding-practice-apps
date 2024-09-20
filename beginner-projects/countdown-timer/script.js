let today = new Date();
let dateUTC = today.getUTCMonth();
let endDate = new Date("2024,09,21");
let differenceMiliseconds = endDate - today;
let differenceSeconds = differenceMiliseconds/1000
let differenceMinutes = (differenceSeconds)/60
let differenceHours = (differenceMinutes)/60
let differenceDay = (differenceHours)/24
console.log(today)
console.log(endDate)
console.log('minutes ' + differenceMinutes)
console.log('hours ' + differenceHours)
console.log('days ' + differenceDay)


//Days from inserted date to now

const dateDistance = function(endDate){

}