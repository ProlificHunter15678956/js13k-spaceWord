const { lerp, clamp, mapLinear } = require('../src/math');

// Test fourni dans le sujet
test('lerp(1, 3, 20) returns 41', () => {
  expect(lerp(1, 3, 20)).toBe(41);
});

// Test fourni dans le sujet
test('clamp(1, 10, 2) returns 2', () => {
  expect(clamp(1, 10, 2)).toBe(2);
});

// Test que VOUS devez rédiger (×5 minimum)
test('lerp returns start when t=0', () => {
  expect(lerp(0, 100, 0)).toBe(0);
});

test('clamp returns max when value exceeds it', () => {
  expect(clamp(1, 10, 99)).toBe(10);
});

test('mapLinear maps value proportionally', () => {
  expect(mapLinear(1, 2, 3, 4, 5)).toBe(3);
});