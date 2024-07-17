import { generateNumbers, calculateTriangleArea } from './utils';

test('generateNumbers returns correct array', () => {
    expect(generateNumbers(5)).toEqual([1, 2, 3, 4, 5]);
});

test('calculateTriangleArea returns correct area', () => {
    expect(calculateTriangleArea(10, 5)).toBe(25);
});
