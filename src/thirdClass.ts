export {};

class Person {
  constructor(
    public name: string,
    private age: number,
    protected address: string
  ) {}
}

let taro = new Person('TARO', 33, 'chiba');
console.log(taro);
