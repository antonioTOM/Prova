//https://hackernoon.com/top-three-coding-challenges-for-mid-level-javascript-developers

let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
];

const namesArray = [];

function extractNames(array, item) {
    array.forEach(element => {
        namesArray.push(element[item])
    });
}

extractNames(input, 'name');

console.log(namesArray);