export {};

function bmi(height: number, weight: number, isPrint?: boolean) {
  let result = weight / (height * height);
  console.log({ isPrint });
  if (isPrint) {
    console.log({ result });
  }
  return result;
}

bmi(1.72, 66, true);
