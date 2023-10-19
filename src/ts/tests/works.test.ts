import { expect, test } from 'vitest';
import { sum } from './works_func';

test('1+2=3', () => {
  expect(expect(sum(1, 2)).toBe(3));
});
