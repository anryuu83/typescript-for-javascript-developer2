export {};

type Profile = {
  name: string;
  age: number;
  isStudent: boolean;
};
type ExtractType = boolean | string | Profile;

type Profile2 = Pick<Profile, 'name' | 'age'>;

let person: Profile2 = {
  name: 'ogura',
  age: 23,
  //   isStudent: true,
};

console.log(person);

type Profile3 = Extract<ExtractType, Profile>;
let person2: Profile3 = {
  name: 'otani',
  age: 3,
  isStudent: false,
};

console.log(person2);
