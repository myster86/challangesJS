//1
function filterEvenNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
}
//2
let people = [
    { name: "Alice", age: 28, email: "alice@example.com" },
    { name: "Bob", age: 35, email: "bob@example.com" },
    { name: "Charlie", age: 42, email: "charlie@example.com" }
];

function filterPeopleOver30(arr) {
    return arr.filter(person => person.age > 30);
}
//3
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
//4
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
//5
function removeVowels(inputString) {
    return inputString.replace(/[aeiouAEIOU]/g, "");
}
//6
function mergeUniqueArrays(arr1, arr2) {
    let mergedArray = [...new Set([...arr1, ...arr2])];
    return mergedArray;
}
