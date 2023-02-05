import getSpace from '../index';

test('should return default value "24px" if no args passed', () => {
  expect(getSpace()).toBe('24px');
});

test('should return value 24', () => {
  expect(getSpace(5, false)).toBe(24);
});

test('should return "4px"', () => {
  expect(getSpace(1, true)).toBe('4px');
});

test('should return 4', () => {
  expect(getSpace(1, false)).toBe(4);
});

test('should return "8px"', () => {
  expect(getSpace(2, true)).toBe('8px');
});

test('should return 8', () => {
  expect(getSpace(2, false)).toBe(8);
});

test('should return "16px"', () => {
  expect(getSpace(3, true)).toBe('16px');
});

test('should return 16', () => {
  expect(getSpace(3, false)).toBe(16);
});

test('should return "20px"', () => {
  expect(getSpace(4, true)).toBe('20px');
});

test('should return 20', () => {
  expect(getSpace(4, false)).toBe(20);
});

test('should return "24px"', () => {
  expect(getSpace(5, true)).toBe('24px');
});

test('should return 24', () => {
  expect(getSpace(5, false)).toBe(24);
});

test('should return "32px"', () => {
  expect(getSpace(6, true)).toBe('32px');
});

test('should return 32', () => {
  expect(getSpace(6, false)).toBe(32);
});

test('should return "48px"', () => {
  expect(getSpace(7, true)).toBe('48px');
});

test('should return 48', () => {
  expect(getSpace(7, false)).toBe(48);
});

test('should return "64px"', () => {
  expect(getSpace(8, true)).toBe('64px');
});

test('should return 64', () => {
  expect(getSpace(8, false)).toBe(64);
});

test('should return "96px"', () => {
  expect(getSpace(9, true)).toBe('96px');
});

test('should return 96', () => {
  expect(getSpace(9, false)).toBe(96);
});

test('should return "160px"', () => {
  expect(getSpace(10, true)).toBe('160px');
});

test('should return 160', () => {
  expect(getSpace(10, false)).toBe(160);
});
