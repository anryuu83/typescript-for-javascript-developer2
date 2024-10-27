export {};

type Username = {
  username: string;
};

type Age = {
  age: number;
};

let person: Username & Age = {
  username: 'anryu',
  age: 36,
};

console.log({ person });
