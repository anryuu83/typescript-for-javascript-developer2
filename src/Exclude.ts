export {};
type MyFunc = (str: string) => void;
type Value1 = string | boolean | number | MyFunc;

type Value2 = Exclude<Value1, string>;
let value3: Value2 = 123;
let value4: Value2 = false;
// let value5: Value2 = 'str';
console.log({ value3 });
console.log({ value4 });
// console.log({ value5 });

type Value6 = Exclude<Value1, Function>;
// let value7: Value6 = (str: string) => {
//   return str;
// };
