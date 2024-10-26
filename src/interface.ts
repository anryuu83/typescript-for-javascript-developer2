export {};

type Profile = {
  name: string;
  age: number;
};

interface ProfileInterface {
  name: string;
  age: number;
}

let person: ProfileInterface = {
  name: 'anryu',
  age: 36,
};

console.log({ person });
