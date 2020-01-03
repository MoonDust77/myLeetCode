import sort from '../../code/sort/lesson5'

test('input:1', () => {
  expect(sort([1, 2, 0])).toEqual([0, 1, 2])
})

test('input:2', () => {
  expect(sort([4, 1, 6, 3, 3])).toEqual([1, 3, 3, 4, 6])
})
