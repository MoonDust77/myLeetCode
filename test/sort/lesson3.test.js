import sort from '../../code/sort/lesson3'
import getFailedSnapshotTests from '_jest-util@24.7.1@jest-util/build/getFailedSnapshotTests';

test('sort:input2', () => {
  expect(sort([3, 6, 9, 1])).toBe(3)
})

test('sort:input3', () => {
  expect(sort([10])).toBe(0)
})

test('sort:input4', () => {
  expect(sort([13, 16, 19, 1])).toBe(12)
})