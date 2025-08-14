function myStringify() {
  let obj = {
    name: "Hello",
    age: 21,
  };
  let result = {};

  for (let key in obj) {
    if (typeof key === "string") {
      // Use single quotes for keys
      result[`'${key}'`] = String(obj[key]);
      // Or use double quotes for keys (uncomment below and comment above if preferred)
      // result[`"${key}"`] = String(obj[key]);
    }
  }

  return result
}

let output = myStringify()

export default myStringify
