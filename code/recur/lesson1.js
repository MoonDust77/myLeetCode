// leetcode 93
export default (str) => {
  let r = []
  // 递归函数
  let search = (cur, sub) => {
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'))
    } else {
      for (let i = 0, len = Math.min(3, sub.length), temp; i < len; i++) {
        temp = sub.substr(0, i + 1)
        if (temp < 256) {
          search(cur.concat([temp]), sub.substr(i + 1))
        }
      }
    }
  }
  search([], str)
  return r
}
