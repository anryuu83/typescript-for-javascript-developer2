export {};

function add(num1: number, num2: number): number {
  return num1 + num2;
}

type ParamType = Parameters<typeof add>;

let a: ParamType = [12, 2];

console.log(add(...a));
