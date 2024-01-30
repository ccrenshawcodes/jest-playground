import { capitalize, reverse, add, subtract, times, divide, caesarCipher, analyzeArray } from "./jest-practice";

//capitalize first letter of string test
test('first letter of string is upper-case', () => {
    expect(capitalize('hello world')).toMatch(/^[A-Z]\w*/);
})

//reverseString test
test('string is reversed', () => {
    expect(reverse('hello')).toMatch('olleh');
})

//calculator test
test('calculator adds', () => {
    expect(add(5, 5)).toBe(10);
})

test('calculator subtracts', () => {
    expect(subtract(5,3)).toBe(2);
})

test('calculator multiplies', () => {
    expect(times(3, 3)).toBe(9);
})

test('calculator divides', () => {
    expect(divide(10,2)).toBe(5);
})

test('caesar cipher happy path', () => {
    expect(caesarCipher('melon', 5)).toMatch('rjqts');
})

test('cipher wrap, case, space and punctuation', () => {
    expect(caesarCipher('HeLlO, wOrLd!zz', 5)).toMatch('MjQqT, bTwQi!ee');
})

test('analyzeArray return object', () => {
    expect(analyzeArray([1, 4, 2, 5])).toEqual({average: 3, min: 1, max: 5, length: 4});
})