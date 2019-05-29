// export default (arr) => {
//   // 过滤负数
//   arr = arr.filter(item => item > 0)
//   if (arr.length) {
//     // 排序,升序
//     arr.sort((a, b) => a - b)
//     if (arr[0] === 1) {
//       // 从左边开始遍历，只要下一个元素和当前元素差值》1说明当前元素的下一个值（+1）
//       for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//           return arr[i] + 1
//         }
//       }
//       return arr.pop() + 1
//     } else {
//       return 1
//     }
//   } else {
//     return 1
//   }
// }

export default (arr) => {
  arr = arr.filter(item => item > 0)
  for (let i = 0, len = arr.length, min, temp; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        temp = min
        min = arr[j]
        arr[j] = temp
      }
    }
    arr[i] = min

    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      if (min !== 1) {
        return 1
      }
    }
  }
  return arr.length ? arr.pop() + 1 : 1
}
