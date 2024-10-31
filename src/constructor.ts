export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type PersonType = ConstructorParameters<typeof Person>;
let personType: PersonType = ['anryu', 36];
let person: Person = new Person(...personType);
console.log(person);
