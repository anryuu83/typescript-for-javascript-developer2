export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  profile() {
    return `name:${this.name},age:${this.age}`;
  }
}

let taro = new Person('taro', 13);
console.log(taro.profile());
