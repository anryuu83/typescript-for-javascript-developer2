export {};

const func = (): number => 43;

let result: any = func();

let result1: unknown = func();

let result2 = result + 10;
if (typeof result1 === 'number') {
  let result3 = result1 + 10;
  console.log({ result3 });
}
