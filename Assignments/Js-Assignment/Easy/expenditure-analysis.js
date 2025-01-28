function calculateTotalSpent(transactions) {
  let obj = []
  for (let i = 0; i < transactions.length; i++) {
    const selectcategory = obj.find(element => element.category == transactions[i].category)
    if (selectcategory) {
      selectcategory.totalspent += transactions[i].price
    }
    else {
      obj.push({ category: transactions[i].category, totalspent: transactions[i].price })
    }
  }
  return obj
}

transactions = [
  { 'category': 'food', 'price': 200 },
  { 'category': 'bills', 'price': 300 },
  { 'category': 'food', 'price': 100 },
  { 'category': 'bills', 'price': 400 },
  { 'category': 'food', 'price': 600 }
]
console.log(calculateTotalSpent(transactions))