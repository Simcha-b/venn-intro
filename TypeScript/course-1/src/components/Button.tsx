// import React, { useState } from "react";

import { type Color } from "../lib/types";
type ButtonProps = {
  backgroundColor?: Color;
  fontSize?: number;
  onClick?: () => void;
  borderRadius?: Record<string, number>;
  children?: React.ReactNode;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
};

// type ButtonProps <T>={
//   countValue?: T;
//   countHistory?: T[];
// };

// type superButtonProps = ButtonProps & {size: number};

// type ButtonProps = React.ComponentPropsWithRef<"button">;

// type ButtonProps = { style: React.CSSProperties};

// function Button<T>({ countValue, countHistory }: ButtonProps<T>) {
//   // const [cnt, setCnt] = useState<number>(0);
//   return <button>Click me!!</button>;
// }

function Button({ backgroundColor }: ButtonProps) {
  return <button style={{ backgroundColor }}>Click me!!</button>;
}
export default Button;
