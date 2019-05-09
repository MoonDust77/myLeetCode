
// 基础写法
// export default (str) => {
//   // 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   let arr = str.split(' ')
//   let result = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }

// = =优雅版
// export default (str) => {
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// 另一种写法使用正则+split
// export default (str) => {
//   return str.split(/\s/).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

// 再另一种写法使用正则+match
export default (str) => {
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
