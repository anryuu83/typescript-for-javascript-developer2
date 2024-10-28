export {};

namespace Japanese {
  export class Person {
    name: string;
    language: string;
    constructor(name: string, language: string) {
      this.name = name;
      this.language = language;
    }
  }
}

namespace America {
  export class Person {
    name: string;
    language: string;
    constructor(name: string, language: string) {
      this.name = name;
      this.language = language;
    }
  }
}

let person = new Japanese.Person('anryu', 'japanese');
console.log(person);

let person2 = new America.Person('Mike', 'English');
console.log(person2);
