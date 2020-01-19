export default (flowerbed, n) => {
  // 计数器
  let count = 0
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      // 处理头尾
      if ((i === 0 && flowerbed[1] === 0) || (i === 0 && flowerbed.length === 1)) {
        flowerbed[i] = 1
        count++
      } else if ((i === flowerbed.length - 1) && flowerbed[flowerbed.length - 2] === 0) {
        flowerbed[i] = 1
        count++
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1
        count++
      }
    }
  }
  return count >= n
}
