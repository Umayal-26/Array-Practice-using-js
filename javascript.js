// 1. Inserting items at a specific position
function insertItemAt(arr, index, item) {
    arr.splice(index, 0, item);
    return arr;
}
let array2 = [1, 2, 4, 5];
console.log("Inserting items at a specific position",insertItemAt(array2, 2, 3));
// 2. Removing array items by index
function removeItemByIndex(arr, index) {
    if (index > -1 && index < arr.length) {
        arr.splice(index, 1);
    }
    return arr;
}
let array1 = [1, 2, 3, 4, 5];
console.log("Removing array items by index",removeItemByIndex(array1, 2)); 

// 3. Sorting arrays with complex objects
function sortArrayByProperty(arr, property) {
    return arr.sort((a, b) => (a[property] > b[property]) ? 1 : (a[property] < b[property]) ? -1 : 0);
}

let array3 = [{name: 'Veena', age: 23}, {name: 'Meena', age: 18}, {name: 'Reena', age: 25}];
console.log("Sorting arrays with complex objects",sortArrayByProperty(array3, 'age')); // Output: [{name: 'Jane', age: 25}, {name: 'John', age: 30}, {name: 'Bill', age: 35}]


// 4. Rotating an array
function rotateArray(arr, steps) {
    steps = steps % arr.length;
    return arr.slice(-steps).concat(arr.slice(0, -steps));
}
let array5 = [1, 2, 3, 4, 5];
console.log("Rotating an array",rotateArray(array5, 2)); // Output: [4, 5, 1, 2, 3]

// 5. Generating an array of a range
function generateRange(start, end) {
    return Array.from({length: end - start + 1}, (_, i) => start + i);
}
console.log("Generating an array of a range",generateRange(3, 7)); // Output: [3, 4, 5, 6, 7]