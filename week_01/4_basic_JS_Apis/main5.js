// for random conding..........


const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

let newObj = Object.assign({}, obj, { newProperty: "newValue" });
console.log("After Object.assign():", newObj);