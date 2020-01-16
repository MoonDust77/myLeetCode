export default (str) => {
  // 建立电话号码键盘映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 把输入字符串按单字符分隔变成数组
  let num = str.split('')
  // 保存键盘映射后的字母内容，如 23 => ['abc', 'def']
  let code = []
  num.forEach(item => {
    if (item > 1 && map[item]) {
      code.push(map[item])
    }
  })
  let comb = (arr) => {
    // 临时变量用来保存前两个组合的结果
    let tmp = []
    // 最外层的循环是遍历第一个元素，里层循环是遍历第二个元素
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  if (code.length === 0) {
    return []
  } else if (code.length === 1) {
    return code[0].split('')
  } else {
    return comb(code)
  }
}
