export {};

let person = {
  name: 'anryu',
  age: 14,
} as const;

let username = 'marry' as const;
// username = 'mike';
console.log({ username });
