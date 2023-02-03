export default class Calculator {

  constructor(age, birthday) {
    this.age = age;
    this.birthday = birthday;
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

  PassedYearsMercury(age, birthday) {
    let passedYearsMercury = (age - birthday) / 0.24;
    passedYearsMercury = Math.round((passedYearsMercury + Number.EPSILON) * 100) / 100
    return passedYearsMercury;
  }

  PassedYearsVenus(age, birthday) {

  }

}