import grayCode from '../../code/array/lesson4'

test('grayCode', () => {
  expect(grayCode(2)).toEqual(['00', '01', '11', '10'])
  expect(grayCode(0)).toEqual(['0'])
})
