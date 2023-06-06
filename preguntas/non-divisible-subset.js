let subset = [19, 10, 12, 24, 25, 22]
let k = 4

for (let i = 0; i < subset.length - 1; i++) {
  console.log('first number ---------------- ' + subset[i])
  for (let j = i + 1; j < (subset.length); j++){
    let sum = subset[i] + subset[j]
    console.log(subset[i], "+", subset[j], "=", sum)
    let mod = sum % k
    console.log('module: ', mod )
    console.log(mod == 0 ? 'discarted xxxxxxxxxxx':'valid number')
  }
}