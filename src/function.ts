export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

let result: number = bmi(1.72, 66);
console.log({ result });
