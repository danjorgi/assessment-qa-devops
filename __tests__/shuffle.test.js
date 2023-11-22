const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return an array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const result = shuffle(inputArray);
    expect(Array.isArray(result)).toBe(true);
  });

  test('return an array the same length as the argument sent in', () => {
    const inputArray = ['apple', 'banana', 'orange', 'grape'];
    const result = shuffle(inputArray);
    expect(result).toHaveLength(inputArray.length);
  });

});
