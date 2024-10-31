export {};
function add(num1: number, num2: number): number {
  return num1 + num2;
}

type RType = ReturnType<typeof add>;

let a: RType = 2;
