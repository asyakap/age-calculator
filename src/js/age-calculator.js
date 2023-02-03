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

  }

}