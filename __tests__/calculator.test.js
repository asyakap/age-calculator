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

  test('it should correctly calculate the age on Mercury', () => {
    expect(calculator.MercuryAge(calculator.age)).toBe(37/0.24);
  });

  test('it should correctly calculate the age on Mars', () => {
    expect(calculator.VenusAge(calculator.age)).toBe(37/0.62);
  });

  test('it should correctly calculate the age on Venus', () => {
    expect(calculator.MarsAge(calculator.age)).toBe(37/1.88);
  });

});