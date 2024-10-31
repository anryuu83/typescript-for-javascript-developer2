export {};

let name: any = 'AnRyu';
let len1 = name.length;
console.log({ len1 });
let len2 = name.length as number;
console.log({ len2 });
let len3 = (<string>name).length;
console.log({ len3 });
