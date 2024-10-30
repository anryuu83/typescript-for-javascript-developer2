export {};

class Person {
  speak(): string {
    return 'I am speak';
  }
}

let person = new Person();
console.log(person.speak());

class Japanese extends Person {
  language: string;
  constructor(language: string) {
    super();
    this.language = language;
  }
  speak(): string {
    // return 'I am speak japanese';
    return `${super.speak()} ${this.language}`;
  }
}

let japanese = new Japanese('japanese');
console.log(japanese.speak());
