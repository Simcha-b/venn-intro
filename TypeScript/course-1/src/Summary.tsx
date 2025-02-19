/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRef, useState } from "react";

/**Typing variables */
const num: number = 4;
const str: string = "Hello";
const bool: boolean = true;

/**Typing arrays */
const arr: number[] = [1, 2, 3];
const strArr: string[] = ["a", "b", "c"];
const boolArr: boolean[] = [true, false, true];

/**Typing functions */
function add(a: number, b: number): number {
  return a + b;
}

/** Union type*/
type Color = "red" | "green" | "blue";

//array of union type
const arr2: (number | string)[] = [1, "a", 2, "b"];

/**Intersection type */
type user = {
  name: string;
  age: number;
  isAdmin: boolean;
};

type userAdmin = user & {
  adminId: string;
};

/**Tuple type */
type Point = [number, number];

/**Record type */
type record = {
  borderRadius?: Record<string, number>;
};
const borderRadius = { topLeft: 5, topRight: 5, bottomLeft: 5, bottomRight: 5 };

/**Type alias */
type User = {
  id: number;
  name: string;
  email?: string;
};

/**Typing React components */

function button({
  backgroundColor,
  fontSize,
}: {
  backgroundColor: string;
  fontSize: number;
}) {
  return <button style={{ backgroundColor }}>Click me!!</button>;
}
/**React.FC */

const Button: React.FC<ButtonProps> = () => {
  return <button>Click me!!</button>;
};

/**React.CSSProperties */
type Style = React.CSSProperties;

/**React children */
type ButtonProps = {
  children?: React.ReactNode;
};

/**Typing useState hook */
const [count, setCount] = useState<number>(0);

// count [User, setUser] = useState<User | null>(null);

/**Handling null cases */

/**Typing useState setter function */
type setProps = {
  setCount?: React.Dispatch<React.SetStateAction<number>>;
};

/**Typing event handlers */
function hendelclick(e: React.MouseEvent<HTMLButtonElement>) {
  console.log(e);
}
function Summary() {
  return <button onClick={(e) => hendelclick(e)}>click</button>;
}
/** Typing useRef hook */
const ref = useRef<HTMLInputElement>(null);

function example() {
  return <input ref={ref}>Summary</input>;
}

/**As const */
const obj = {
  name: "John",
  age: 30,
} as const;

// obj.age = 40; // Error

//type guard

//typeof
function typeofExample(value: number | string): void {
  if (typeof value === "string") {
    console.log("string");
  } else if (typeof value === "number") {
    console.log("number");
  }
}
//instanceof
function instanceofExample(value: object): void {
  if (value instanceof Date) {
    console.log("Date");
  } else if (value instanceof RegExp) {
    console.log("RegExp");
  }
}

//in
function inExample(value: any): void {
  if ("name" in value) {
    console.log("name");
  } else if ("age" in value) {
    console.log("age");
  }
}

//is
function isString(value: number | string): value is string {
  return typeof (value as string) === "string";
}

//utility types

//Partial
interface UserP {
  name: string;
  age: number;
}
const user: Partial<UserP> = {
  name: "John",
};

//Required
interface UserR {
  name?: string;
  age?: number;
}
const requiredUser: Required<UserR> = {
  name: "John",
  age: 30,
};

//Readonly
interface Todo {
  title: string;
  description?: string;
}
const myTodo: Readonly<Todo> = {
  title: "hello",
};
//myTodo.title = "sss"// Error

//Record
interface Page {
  title: string;
}

const pages: Record<string, Page> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};
console.log(pages.home);

//Pick
interface UserPick {
  name: string;
  age: number;
  email: string;
}

const userPick: Pick<UserPick, "name" | "age"> = {
  name: "John",
  age: 30,
};

//Omit
interface UserOmit {
  name: string;
  age: number;
  email: string;
}

const userOmit: Omit<UserOmit, "email" | "age"> = {
  name: "John",
};
