export {};

class Person {
  name: string = 'anryu';
  readonly age: number = 30;
  static address: string = 'kashiwa';
  sayName() {
    console.log(this.name);
  }
  static printAddress() {
    console.log(this.address);
  }
}

let person = new Person();
console.log(person);
person.sayName();
Person.printAddress();
console.log(Person.address);
