export {};

let sum = (...nums: number[]) => {
  let total = nums.reduce((pre, next) => {
    pre += next;
    return pre;
  }, 0);
  console.log({ total });
  return total;
};

sum(1, 2, 3, 4, 5);
