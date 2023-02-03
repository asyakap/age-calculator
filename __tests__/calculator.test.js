import Calculator from './../src/js/age-calculator.js'; 

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    let age = 37;
    calculator = new Calculator(age);
  });

  test('it should correctly create a constructor and return the age', () => {
    expect(calculator.age).toBe(37);
  });

});