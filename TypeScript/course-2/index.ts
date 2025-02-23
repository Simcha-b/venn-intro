const a: number = 1;
// console.log(a);

const arr = [1, 2, ["ff"]];

const tuple: [number, string] = [1, "ff"];
const cord: [number, number][] = [
  [1, 2],
  [3, 4],
];

// console.log(tuple[0]);

enum Color {
  Red,
  Green,
  Blue,
}

// console.log(Color.Red);

const x: unknown = 1;

if (typeof x === "number") {
  //   console.log(x);
}
const y = (x as number[])[0];

const chin = [
  { name: "chin", age: 20 },
  { name: "chin2", age: 21 },
];
const res = chin.pop();
console.log(chin, res);

function makeName(
  firstName: string,
  lastName: string,
  middleName?: string
): string {
  if (middleName) {
    return firstName + " " + middleName + " " + lastName;
  }
  return firstName + " " + lastName;
}
console.log(makeName("mosh", "shemesh"));

function aplayFunc(
  funcs: ((v1: number, v2: number) => number)[],
  values: [number, number][]
): number[] {
  const rerults: number[] = [];
  return rerults;
}

function testOverload(a: string, b: string): string;
function testOverload(a: number, b: number): number;
function testOverload(a: unknown, b: unknown): unknown {
  if (typeof a === "string" && typeof b === "string") {
    return a.toString() + b.toString();
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 0;
}

// console.log(testOverload("a", 1)); //Error

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "mosh",
  age: 20,
};


