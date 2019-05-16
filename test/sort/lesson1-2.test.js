import sort from '../../code/sort/lesson1-2'

test('选择排序', () => {
  expect(sort([7, 2, 9, 1, 4])).toEqual([1, 2, 4, 7, 9])
})