import regModeStr from '../../code/regexp/lesson2'

test('regModeStr', () => {
  expect(regModeStr('aa', 'a')).toBe(false)
  expect(regModeStr('aa', 'a*')).toBe(true)
})
