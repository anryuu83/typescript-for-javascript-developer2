export {};

type Profile = {
  name: string;
  age: number;
  address: string;
};

let person1: Profile = {
  name: 'anryu',
  age: 25,
  address: 'kashiwa',
};

console.log({ person1 });
