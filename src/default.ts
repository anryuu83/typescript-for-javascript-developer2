export {};

function taxedPrice(price: number, taxRate: number = 1.05): number {
  return price * taxRate;
}

let price = taxedPrice(300, 1.1);
console.log({ price });

let price2 = taxedPrice(500);
console.log({ price2 });
