export {};

class Person {
  public name;
  protected nation;
  private age;
  constructor(name: string, age: number, nation: string) {
    this.name = name;
    this.age = age;
    this.nation = nation;
  }
  profile(): string {
    return `name:${this.name},age:${this.age},nation:${this.nation}`;
  }
}

let taro = new Person('taRo', 23, 'JAPAN');
console.log(taro);
console.log(taro.profile());
console.log(taro.name);

class Japanese extends Person {
  profile(): string {
    return `nation:${this.nation}`;
  }
}

let j1 = new Japanese('jiro', 22, 'JAPAN');
console.log(j1.profile());
