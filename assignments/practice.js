array = [1,2,3,4,5,6,7,8,9,10]


//Adds all of the array's values
let arraysTotalSum = array.reduce((acc, item) => acc += item , 0)

console.log("The total sum of the array --> ", arraysTotalSum());