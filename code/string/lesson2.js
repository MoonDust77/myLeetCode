export default (str) => {
  // 建立数据结构，堆栈，保存数据
  // let r = []
  let count = 0
  // 给定任意子输入返回第一个符合条件的子串
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    // let reg = new RegExp(`^(${j}${o})`)
    // if (reg.test(str)) {
    //   return RegExp.$1
    // } else {
    //   return ''
    // }
    // 超长字符串无法使用正则，改用startsWith
    return str.startsWith(`${j}${o}`)
  }
  // 通过for循环控制程序运行的流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
    // let sub = match(str.slice(i))
    // if (sub) {
    //   r.push(sub)
    // }
    if (match(str.slice(i))) count++
  }
  return count
}
