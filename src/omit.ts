export {};

type Profile = {
  name: string;
  age: number;
  isBoss: boolean;
};

type Student = Omit<Profile, 'isBoss'>;

let student: Student = {
  name: 'taro',
  age: 12,
};

console.log(student);
