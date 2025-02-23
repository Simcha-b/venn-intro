// type Currency = "USD" | "EUR" | "RUB";

// const get = async () => {
//   const data = await fetch(
//     "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
//   );
//   const res = await data.json();
//   console.log(res);
// };
// get();

// function getRate(Currency: Currency): number {
//   //api(Currency)
//   switch (Currency) {
//     case "USD":
//       return 1;
//     case "EUR":
//       return 0.9;
//     case "RUB":
//       return 65;
//     default:
//       throw new Error("Unknown currency");
//   }
// }

// function chaneng(sum: number, from: Currency, to: Currency): number {
//   const rate = getRate(to) / getRate(from);
//   return sum * rate;
// }

// type cssValue = string | number;
// function size(value: cssValue) {
//   return typeof value === "string" ? value : value + "px";
// }
// console.log(size(10));
// console.log(size("10px"));
class A {
  constructor(public name: string) {}
}

let b = new A("mosh");
console.log(b.name);
