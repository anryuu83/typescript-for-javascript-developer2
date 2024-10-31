export {};

type Profile = {
  name: string;
  age: number;
};

type Person = Readonly<Profile>;
let foo: Person = {
  name: 'an',
  age: 2,
};

// foo.age = 3;
console.log(foo);
