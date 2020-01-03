import {game} from '../../code/array/practice'

test('game:3', () => {
  expect(game([1, 2, 3], [1, 2, 3])).toBe(3)
})

test('game:1', () => {
  expect(game([1, 2, 3], [3, 2, 1])).toBe(1)
})
