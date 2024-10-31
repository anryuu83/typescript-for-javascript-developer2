export {};

class Mirror<T> {
  constructor(public value: T) {}
  print(): T {
    return this.value;
  }
}

let m1 = new Mirror(123);
console.log(m1.print());
let m2 = new Mirror('anryu');
console.log(m2.print());
let m3 = new Mirror(false);
console.log(m3.print());
