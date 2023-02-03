export default class Calculator {

  constructor(age, date, pastBirthday, futureBirthday) {
    this.age = age;
    this.date = date;
    this.pastBirthday = pastBirthday;
    this.futureBirthday = futureBirthday;
  }

  MercuryAge(age) {
    let mercuryAge = age / 0.24;
    mercuryAge = Math.round((mercuryAge + Number.EPSILON) * 100) / 100;
    return mercuryAge;
  }

  VenusAge(age) {
    let venusAge = age / 0.62;
    venusAge = Math.round((venusAge + Number.EPSILON) * 100) / 100;
    return venusAge;
  }

  MarsAge(age) {
    let marsAge = age / 1.88;
    marsAge = Math.round((marsAge + Number.EPSILON) * 100) / 100;
    return marsAge;
  }

  JupiterAge(age) {
    let jupiterAge = age / 11.86;
    jupiterAge = Math.round((jupiterAge + Number.EPSILON) * 100) / 100;
    return jupiterAge;
  }

  PassedYearsMercury(age, pastBirthday) {
    let passedYearsMercury = (age - pastBirthday) / 0.24;
    passedYearsMercury = Math.round((passedYearsMercury + Number.EPSILON) * 100) / 100;
    return passedYearsMercury;
  }

  PassedYearsVenus(age, pastBirthday) {
    let passedYearsVenus = (age - pastBirthday) / 0.62;
    passedYearsVenus = Math.round((passedYearsVenus + Number.EPSILON) * 100) / 100;
    return passedYearsVenus;
  }

  PassedYearsMars(age, pastBirthday) {
    let passedYearsMars = (age - pastBirthday) / 1.88;
    passedYearsMars = Math.round((passedYearsMars + Number.EPSILON) * 100) / 100;
    return passedYearsMars;
  }

  PassedYearsJupiter(age, pastBirthday) {
    let passedYearsJupiter = (age - pastBirthday) / 11.86;
    passedYearsJupiter = Math.round((passedYearsJupiter + Number.EPSILON) * 100) / 100;
    return passedYearsJupiter;
  }

  FutureYearsMercury(age, futureBirthday) {
    let futureYearsMercury = (futureBirthday - age) / 0.24;
    futureYearsMercury = Math.round((futureYearsMercury + Number.EPSILON) * 100) / 100;
    return futureYearsMercury;
  }

  FutureYearsVenus(age, futureBirthday) {
    let futureYearsVenus = (futureBirthday - age) / 0.62;
    futureYearsVenus = Math.round((futureYearsVenus + Number.EPSILON) * 100) / 100;
    return futureYearsVenus;
  }

  FutureYearsMars(age, futureBirthday) {
    let futureYearsMars = (futureBirthday - age) / 1.88;
    futureYearsMars = Math.round((futureYearsMars + Number.EPSILON) * 100) / 100;
    return futureYearsMars;
  }
  FutureYearsJupiter(age, futureBirthday) {
    let futureYearsJupiter = (futureBirthday - age) / 11.86;
    futureYearsJupiter = Math.round((futureYearsJupiter + Number.EPSILON) * 100) / 100;
    return futureYearsJupiter;
  }

  CountDiff(date, today) {
    date = new Date(date);
    today = new Date();
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  DaysNumberEarth(date, futureBirthday) {
    let birthday = new Date(date);
    let bornYear = birthday.getFullYear();
    let futureYear = bornYear + futureBirthday;
    let newDate = new Date(futureYear, birthday.getMonth(), birthday.getDate()); 
    let today = new Date();
    date = newDate;
    let days = Math.abs(this.CountDiff(date, today));
    return days;
  }

  DaysToPass(date, futureBirthday) {
  }   
}