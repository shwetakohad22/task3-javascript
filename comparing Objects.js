

let obj1 = { name: "person 1", age: "5" };
  let obj2 = { age: "5", name: "person 1" }; 
function deepCompare(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    return true;
  } 
  if (deepCompare(obj1, obj2)) {
    console.log("The JSON objects are equal");
  } else {
    console.log("The JSON objects are not equal.");
  }
  