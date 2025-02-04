// const dog={
//   name:"lemon",
//   legCount:2,
//   speaks:"Leo leo",
// };
// const cat={
//   name:"meow",
//   legCount:2,
//   speaks:"bakkkkk",
// };

//* This is why classes is used just define the blueprint once and then use if for others
class animal {
  date = new Date()
  constructor(name, speaks) {
    this.name = name
    this.speaks = speaks

  }
  speak() {
    console.log("Bhow bhow man " + this.speaks)
    console.log(this.date.getFullYear())
  }

  //static method can be called directly on the class rather than 
  //creating an object
  static myfunc() {
    console.log("This is the my area man i dont listen to others")
  }
}
let dog = new animal("rohit", 'leo leo')
dog.speak()
animal.myfunc()

