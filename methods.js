const food=['rice','sup','curry','chicken','vegetable']
//check the array length
console.log(food.length)
//let the array to string
console.log(food.toString())
//add symbol between the value
console.log(food.join("--"))
//delete the value back
console.log(food.pop())
//add the value back
food.push("mihun")
console.log(food)
//delete the value front
console.log(food.shift())
//add the value front
food.unshift("cake")
console.log(food)

//concat is combine the two array
const girl=["jasmine","lily"]
const boys=['louis','ali','abu','aiman']
const both=girl.concat(boys)
console.log(both)

//first number can let the value before which value,and second number is delete the value
girl.splice(1,0,"Mei");
console.log(girl)

//cut first 2 value and print left value
console.log(boys.slice(2))

//let the array follow a-z arrange
console.log(food.sort())
//reverse the array
console.log(food.reverse())
