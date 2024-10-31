export {};

type Profile = {
  name: string;
  age: number;
  zipCode: string;
};

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;

let person: PartialType = {
  name: 'foo',
};

console.log(person);

let person2: RequiredType = {
  name: 'bar',
  age: 22,
  zipCode: '111-9999',
};
console.log(person2);
