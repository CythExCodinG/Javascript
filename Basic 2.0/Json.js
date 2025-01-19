// *JSON Provides 2 main functions like JSON.parse and JSON.stringify
const users = '{"name":"rohit","age":25,"gender":"male"}'
const user = JSON.parse(users)
console.log(user['name'])

const newObject = {
  'name': 'ramesh',
  'age': 45,
  'class': 'FYMca'
}
console.log(newObject)
console.log("Original Object is :", newObject)
stringObject = JSON.stringify(newObject)
console.log("Object Converted into string is :", stringObject)
