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

type ReadonlyProfile<T> = {
  readonly [P in keyof T]: T[P];
};

let person2: ReadonlyProfile<Profile> = {
  name: 'kawamoo',
  age: 23,
};

console.log(person2);
