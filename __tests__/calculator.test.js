import Calculator from './../src/js/age-calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    let age = 37;
    let date = "09/09/1985";
    let pastBirthday = 20;
    let futureBirthday = 50;
    calculator = new Calculator(age, date, pastBirthday, futureBirthday);
  });

  test('it should correctly create a constructor and return the age', () => {
    expect(calculator.age).toBe(37);
    expect(calculator.date).toBe("09/09/1985");
    expect(calculator.pastBirthday).toBe(20);
    expect(calculator.futureBirthday).toBe(50);
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
    expect(calculator.PassedYearsMercury(calculator.age, calculator.pastBirthday)).toBe(70.83);
  });

  test('it should correctly calculate how many years have passed on Venus since a past birthday', () => {
    expect(calculator.PassedYearsVenus(calculator.age, calculator.pastBirthday)).toBe(27.42);
  });

  test('it should correctly calculate how many years have passed on Mars since a past birthday', () => {
    expect(calculator.PassedYearsMars(calculator.age, calculator.pastBirthday)).toBe(9.04);
  });

  test('it should correctly calculate how many years have passed on Jupiter since a past birthday', () => {
    expect(calculator.PassedYearsJupiter(calculator.age, calculator.pastBirthday)).toBe(1.43);
  });

  test('it should correctly calculate how many years is left to pass on Mercury before the future birthday', () => {
    expect(calculator.FutureYearsMercury(calculator.age, calculator.futureBirthday)).toBe(54.17);
  });

  test('it should correctly calculate how many years is left to pass on Venus before the future birthday', () => {
    expect(calculator.FutureYearsVenus(calculator.age, calculator.futureBirthday)).toBe(20.97);
  });

  test('it should correctly calculate how many years is left to pass on Mars before the future birthday', () => {
    expect(calculator.FutureYearsMars(calculator.age, calculator.futureBirthday)).toBe(6.91);
  });

  test('it should correctly calculate how many years is left to pass on Jupiter before the future birthday', () => {
    expect(calculator.FutureYearsJupiter(calculator.age, calculator.futureBirthday)).toBe(1.1);
  });

  test('it should correctly count difference in days between two dates', () => {
    expect(calculator.CountDiff(calculator.date, calculator.today)).toBe(13661);
  });

  test('it should correctly calculate how many days is left to pass on Earth before the future birthday', () => {
    expect(calculator.DaysNumberEarth(calculator.date, calculator.futureBirthday)).toBe(4601);
  });

});