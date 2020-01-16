// export default (arr) => {
//   // 卡牌排序，排序的目的就是为了让相同的牌排在一起方法我们分组
//   let str = arr.sort().join('')
//   // 分组(单张或者多张)
//   let group = str.match(/(\d)\1+|\d/g)
//   // 求两个数的最大公约数
//   function gcd (a, b) {
//     if (b === 0) {
//       return a
//     } else {
//       return gcd(b, a % b)
//     }
//   }
//   while (group.length > 1) {
//     let a = group.shift().length
//     let b = group.shift().length
//     let v = gcd(a, b)
//     if (v === 1) {
//       return false
//     } else {
//       group.unshift('0'.repeat(v))
//     }
//   }
//   return group.length ? group[0].length > 1 : false
// }

// 使用上面的正则表达式的方式，会导致卡牌牌面大于等于10时，分组出错，10分为1 ，0
export default (arr) => {
  let sotrArr = arr.sort()
  // 统计各个数字的个数
  let numArr =[]
  let num = sotrArr[0]
  let count = 0
  sotrArr.forEach((item, index) => {
    if (item === num) {
      count++
    } else {
      numArr.push(count)
      num = item
      count = 1
    }
  })
  // 放入最后一组数据
  numArr.push(count)
  // 求两个数的最大公约数
  function gcd(a, b) {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  // 循环一直求到最后，看是不是都具有最大公约数
  while(numArr.length > 1) {
    let a = numArr.shift()
    let b = numArr.shift()
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      numArr.unshift(v)
    }
  }
  return numArr.length ? numArr[0] > 1 : false
}
