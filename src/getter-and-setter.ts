export {};

class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name() {
    console.log('get name called');
    return this._name;
  }
  set name(name: string) {
    console.log('set name called');
    this._name = name;
  }
  get age() {
    console.log('get age called');
    return this._age;
  }
  set age(age: number) {
    console.log('set age called');
    this._age = age;
  }
}

let person = new Person('naryu', 33);
console.log(person.name);
person.name = 'anzhe';
console.log(person.age);
person.age = 37;
