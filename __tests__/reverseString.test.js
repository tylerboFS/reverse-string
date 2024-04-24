const { reverseString } = require("../index");

//describe() is used for grouping relatted test
describe('reverseString', () => {

  test('reverse single-word string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('tyler')).toBe('relyt');
    expect(reverseString('racecar')).toBe('racecar');
  });

  test('reverse multi-word string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('reverse multi-word string and capitals', () => {
    expect(reverseString('hELlo world')).toBe('dlrow olLEh');
  });

  test('reverse multi-word string and capitals and punctuation', () => {
    expect(reverseString('hELlo world!')).toBe('!dlrow olLEh');
  });

  test('reverse multi-word string and capitals and punctuation AND newline', () => {
    expect(reverseString('hELlo world!\nHi')).toBe('iH\n!dlrow olLEh');
  });

  test('emptstring should return empty string', () => {
    expect(reverseString('')).toBe('');
  });


  test('number should return undefined', () => {
    expect(reverseString(123)).toBe(undefined);
  })

  test("NaN should return undefined", () => {
    const result = reverseString(NaN);
    expect(result).toBe(undefined);
  })

  test("Object should return undefined", () => {
    const result = reverseString({ name: "Tyler"});
    expect(result).toBe(undefined);
  })



})