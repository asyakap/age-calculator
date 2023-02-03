import Calculator from './../src/js/age-calculator.js'; 

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    let age = 37;
    let birthday = 20;
    calculator = new Calculator(age, birthday);
  });

  test('it should correctly create a constructor and return the age', () => {
    expect(calculator.age).toBe(37);
    expect(calculator.birthday).toBe(20);
  });

  test('it should correctly calculate the age on Mercury', () => {
    expect(calculator.MercuryAge(calculator.age)).toBe(154.17);
  });

  test('it should correctly calculate the age on Venus', () => {
    expect(calculator.VenusAge(calculator.age)).toBe(59.68);
  });

  test('it should correctly calculate the age on Mars', () => {
    expect(calculator.MarsAge(calculator.age)).toBe(19.68);
  });

  test('it should correctly calculate the age on Jupiter', () => {
    expect(calculator.JupiterAge(calculator.age)).toBe(3.12);
  });

  test('it should correctly calculate how many years have passed on Mercury since a past birthday', () => {
    expect(calculator.PassedYearsMercury(calculator.age, calculator.birthday)).toBe(70.83);
  });

  test('it should correctly calculate how many years have passed on Venus since a past birthday', () => {
    expect(calculator.PassedYearsVenus(calculator.age, calculator.birthday)).toBe(27.42);
  });

  test('it should correctly calculate how many years have passed on Mars since a past birthday', () => {
    expect(calculator.PassedYearsMars(calculator.age, calculator.birthday)).toBe(27.42);
  });

  test('it should correctly calculate how many years have passed on Jupiter since a past birthday', () => {
    expect(calculator.PassedYearsJupiter(calculator.age, calculator.birthday)).toBe(27.42);
  });

});