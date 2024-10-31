export {};

type TypeA = string | null | boolean | number | undefined;

type NonNullableType = NonNullable<TypeA>;

// let value1: NonNullableType = null;
// let value2: NonNullableType = undefined;
let value3: NonNullableType = 'str';
let value4: NonNullableType = true;
let value5: NonNullableType = 123;
console.log({ value3 });
console.log({ value4 });
console.log({ value5 });
