export {};

let person: { name: string; age: number } = {
  name: 'anryu',
  age: 2,
};

console.log(person);

let person2: { name: string; age: number | null } = {
  name: 'anryu',
  age: null,
};

console.log(person2);
