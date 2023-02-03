export default class Calculator {

  constructor(age, pastBirthday, futureBirthday) {
    this.age = age;
    this.pastBirthday = pastBirthday;
    this.futureBirthday = futureBirthday;
  }

  MercuryAge(age) {
    let mercuryAge = age / 0.24;
    mercuryAge = Math.round((mercuryAge + Number.EPSILON) * 100) / 100
    return mercuryAge;
  }

  VenusAge(age) {
    let venusAge = age / 0.62;
    venusAge = Math.round((venusAge + Number.EPSILON) * 100) / 100
    return venusAge;
  }
  
  MarsAge(age) {
    let marsAge = age / 1.88;
    marsAge = Math.round((marsAge + Number.EPSILON) * 100) / 100
    return marsAge;
  }

  JupiterAge(age) {
    let jupiterAge = age / 11.86;
    jupiterAge = Math.round((jupiterAge + Number.EPSILON) * 100) / 100
    return jupiterAge;
  }

  PassedYearsMercury(age, pastBirthday) {
    let passedYearsMercury = (age - pastBirthday) / 0.24;
    passedYearsMercury = Math.round((passedYearsMercury + Number.EPSILON) * 100) / 100
    return passedYearsMercury;
  }

  PassedYearsVenus(age, pastBirthday) {
    let passedYearsVenus = (age - pastBirthday) / 0.62;
    passedYearsVenus = Math.round((passedYearsVenus + Number.EPSILON) * 100) / 100
    return passedYearsVenus;
  }

  PassedYearsMars(age, pastBirthday) {
    let passedYearsMars = (age - pastBirthday) / 1.88;
    passedYearsMars = Math.round((passedYearsMars + Number.EPSILON) * 100) / 100
    return passedYearsMars;
  }

  PassedYearsJupiter(age, pastBirthday) {
    let passedYearsJupiter = (age - pastBirthday) / 11.86;
    passedYearsJupiter = Math.round((passedYearsJupiter + Number.EPSILON) * 100) / 100
    return passedYearsJupiter;
  }

  FutureYearsMercury(age, futureBirthday) {
    let futureYearsMercury = (futureBirthday - age) / 0.24;
    futureYearsMercury = Math.round((futureYearsMercury + Number.EPSILON) * 100) / 100
    return futureYearsMercury;
  }

  FutureYearsVenus(age, futureBirthday) {
    let futureYearsVenus = (futureBirthday - age) / 0.62;
    futureYearsVenus = Math.round((futureYearsVenus + Number.EPSILON) * 100) / 100
    return futureYearsVenus;
  }

  FutureYearsMars(age, futureBirthday) {
    let futureYearsMars = (futureBirthday - age) / 1.88;
    futureYearsMars = Math.round((futureYearsMars + Number.EPSILON) * 100) / 100
    return futureYearsMars;
  }
  FutureYearsJupiter(age, futureBirthday) {
    let futureYearsJupiter = (futureBirthday - age) / 11.86;
    futureYearsJupiter = Math.round((futureYearsJupiter + Number.EPSILON) * 100) / 100
    return futureYearsJupiter;
  }

}