import React from "react";

type CounterProps = {
  increment: (e: React.MouseEvent<HTMLButtonElement>) => void;
  decrement: (e: React.MouseEvent<HTMLButtonElement>) => void;
  count: number;
};

function Counter({ count, increment, decrement }: CounterProps) {
  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
