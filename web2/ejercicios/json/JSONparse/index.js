const jsonString = `{"name": "John Doe", "age": 30, "city": "New York"}`;

const jsonObj = JSON.parse(jsonString);

console.log(jsonObj)
console.log(jsonObj.name)