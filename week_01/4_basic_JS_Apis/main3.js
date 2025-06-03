// class and object
// static method and Instance Method


// class Animal {
//   constructor(name, legCount, speaks) {
//     this.name = name;
//     this.legCount = legCount;
//     this.speaks = speaks;
//   }
//   speak(){
//     console.log("hi there" + this.speaks);
//   }
// }

// let dog = new Animal("dog", 4, " bhow bhow"); //create object
// let cat = new Animal("cat", 4, " meow meow");
// dog.speak(); //call function on object
// cat.speak();

// static method
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
//   static method
  static myType(){
    console.log("Animal ha ha");
  }
//   Instance Method
  speak(){
    console.log("hi there" + this.speaks);
  }
}

Animal.myType()  // static function is called on class not object
let dog = new Animal("dog", 4, " bhow bhow"); //create object
let cat = new Animal("cat", 4, " meow meow");
dog.speak(); //call instance function on object
cat.speak();

