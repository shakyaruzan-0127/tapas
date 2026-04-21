// 1. Even Odd Number
function evenOdd(number) {
  let result =
    number % 2 === 0    //condition
      ? `${number} is an even number` //  if
      : `${number} is an odd number`; //  else
  return result;
}
console.log(evenOdd(15));

//2. driving lisence eligibility
function drivingLicense(age) {
    let test =
    age >= 18 && age <= 80 
    ? 'okey to drive'
    : 'no lisence for you';
    return test;
}
console.log(drivingLicense(50));

//3. annual salary plus bonus
function salary(month, bonusRate) {
    let year = month * 12;
    let bonus = bonusRate * year;
    return year + bonus;
}
console.log(salary(12300, 0.2));

//4. traffic
function trafficColor(color) {
    if (color === 'Red') {
        return 'Stop';
    } else if (color === 'Green') {
        return 'GO';
    }
}
console.log(trafficColor('Green'));

//5. Electricity bill
function electricityBill(monthlyUnits, discountRate) {
    let monthlyCost = monthlyUnits * 150;
    let yearlyCost = monthlyCost * 12;
    let discount = discountRate * yearlyCost;
    return yearlyCost - discount;
}
console.log(electricityBill(200, 0.2)); //constant monthly units spent. i.e. 200 units per month

//6. leap year
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !==0) || year % 400 === 0) {
        return `The year ${year} is a leap year.`;
    } else {
        return `The year ${year} is not a leap year.`;
    }
}
console.log(leapYear(1900));

