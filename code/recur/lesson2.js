// leetcode 30
export default (str, words) => {
  if (str.length === 0 || words.length === 0) return []
  // 保存结果
  let result = []
  // 记录数组的长度，做边界条件计算
  let num = words.length
  // 递归函数体
  let range = (r, _arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      _arr.forEach((item, idx) => {
        let tmp = [].concat(_arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  }
  range([], words)
  // 递归寻找word在string中的位置
  let findIndex = (word, str, start) => {
    let index = str.indexOf(word, start)
    let indexs = []
    if (index > -1) {
      indexs.push(index)
      let subIndex = findIndex(word, str, start + 1)
      indexs = [...indexs, ...subIndex]
    }
    return indexs
  }
  let indexResult = []
  result.forEach(item => {
    let findWordIndexs = findIndex(item.join(''), str, 0)
    indexResult = [...indexResult, ...findWordIndexs]
  })
  indexResult.sort()
  let set = new Set(indexResult)
  return [...set]
}
