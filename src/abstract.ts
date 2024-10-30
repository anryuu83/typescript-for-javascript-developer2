export {};

abstract class Animal {
  abstract eat(): string;
  run(): string {
    return 'I can run';
  }
}

class Cat extends Animal {
  eat(): string {
    return 'fish';
  }
}

class Dog extends Animal {
  eat(): string {
    return 'bone';
  }
}

let cat = new Cat();
console.log(cat.run());
console.log(cat.eat());

let dog = new Dog();
console.log(dog.run());
console.log(dog.eat());
