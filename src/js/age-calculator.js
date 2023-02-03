export default class Calculator {

  constructor(age) {
    this.age = age;
  }

  MercuryAge(age) {
    let mercuryAge = age / 0.24;
    return mercuryAge;
  }

  VenusAge(age) {
    let venusAge = age / 0.62;
    return venusAge;
  }
  
  MarsAge(age) {
    let marsAge = age / 1.88;
    return marsAge;
  }

  JupiterAge(age) {
    let jupiterAge = age / 11.86;
    jupiterAge = Math.round((jupiterAge + Number.EPSILON) * 100) / 100
    return jupiterAge;
  }
}