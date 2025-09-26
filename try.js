// http://localhost:3002/files/:fileName
// in the place of fileName you can put anything as a input

// app.get("/files/:fileName", function(req,res){
//     const name = req.params.fileName;
//     console.log(name)
//     res.json({});

// })

// static method
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
//   static method
  static myType(){
    console.log("Animal ha ha" + this.speaks);
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
