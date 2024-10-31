export {};

let anyType: any;
let stringType: string = 'anryu';
let numType: number = 123;
let boolType: boolean = true;
stringType = anyType;
console.log(typeof stringType);
anyType = stringType;
console.log(typeof anyType);
anyType = numType;
console.log(typeof anyType);
anyType = boolType;
console.log(typeof anyType);

interface Animal {
  age: number;
}
class Student {
  constructor(public age: number) {}
}

class Person {
  constructor(public age: number) {}
}

let person: Person = new Person(12);
let animal: Animal = person;
console.log(animal);
let p: Person = new Student(1);
console.log(p);
