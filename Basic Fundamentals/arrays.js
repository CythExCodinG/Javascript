const personArray = ["Harkirat", "Rohit", "Rushabh", "Atharva"]
for (let index = 0; index < personArray.length; index++) {
  console.log(personArray[index])
}

const ages = [2, 4, 6, 3, 7, 8, 5, 55, 53, 23, 431, 56, 54, 87, 89, 99, 92, 32]
for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i])
  }
}

const array = [3, 5, 3, 5, 2, 44, 5, 77, 44, 86, 92, 34, 567, 4332, 645, 4343, 7754, 6534, 3434]
let max = 0
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i]
  }
}

console.log("Max Element from the array is : " + max)
