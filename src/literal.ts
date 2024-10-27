export {};
type DayOfWeek =
  | 'sunday'
  | 'Monday'
  | 'Tuseday'
  | 'Wenseday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';

let today: DayOfWeek = 'Friday';
type Gender = 0 | 1;
let gender: Gender = 1;
type True = 'true';
let isFinish: True = 'true';

console.log({ today });
console.log({ gender });
console.log({ isFinish });
