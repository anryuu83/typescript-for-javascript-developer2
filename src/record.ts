export {};

type PrefectureName = 'Tokyo' | 'Chiba' | 'Niigata';

type PrefectureInfo = {
  population: number;
};

let prefecture: Record<PrefectureName, PrefectureInfo> = {
  Chiba: { population: 11 },
  Tokyo: { population: 11 },
  Niigata: { population: 11 },
  //   Hokkaido: { population: 2 },
};
console.log(prefecture);
