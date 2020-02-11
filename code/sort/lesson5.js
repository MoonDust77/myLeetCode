// 快速排序
// export default (arr) => {
//   let quickSort = (arr) => {
//     let len = arr.length
//     if (len < 2) {
//       return arr
//     } else {
//       // 标尺元素
//       let flag = arr[0]
//       let left = []
//       let right = []
//       // 把剩下的元素遍历，比标尺元素小的放左边，大的放右边
//       for (let i = 1, temp; i < len; i++) {
//         temp = arr[i]
//         if (temp < flag) {
//           left.push(temp)
//         } else {
//           right.push(temp)
//         }
//       }
//       return quickSort(left).concat(flag, quickSort(right))
//     }
//   }
//   return quickSort(arr)
// }

// in-place
export default (arr) => {
  // 交换数组的两个值
  let swap = (arr, i, j) => {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  // 完成一次划分交换
  let findCenter = (arr, left, right) => {
    let flag = arr[left]
    let idx = left + 1
    for (let i = idx; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, idx, i)
        idx ++
      }
    }
    swap(arr, left, idx - 1)
    return idx
  }

  // 递归调用
  let sort = (arr, left, right) => {
    if (left < right) {
      let center = findCenter(arr, left, right)
      sort(arr, left, center - 1)
      sort(arr, center, right)
    }
  }
  sort(arr, 0, arr.length - 1)
  return arr
}
