export {};

let person: { [propName: string]: any } = {};

person.name = 'AnRyu';
person.age = 12;
person.address = 'funabashi';

console.log(person);

interface Profile {
  name: string;
  age: number;
  [propName: string]: any;
}

let person2: Profile = {
  name: 'Anryu',
  age: 22,
  address: 'funabashi',
  isStudent: false,
};

console.log(person2);
