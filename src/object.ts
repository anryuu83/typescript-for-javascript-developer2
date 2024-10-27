export {};

let person: { name: string; age: number } = {
  name: 'anryu',
  age: 36,
};
console.log(person);

type Cat = {
  name: string;
  [propName: string]: any;
};
let cat: Cat = {
  name: 'kochi',
  age: 35,
  onwer: 'anryu',
};

console.log(cat);
