import { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";

export default function Home() {
  //   const [count, setCount] = useState(0);
  //   const [darkMode, setDarkMode] = useState(false);

  const [count, setCount] = useState<number>(0);

  

  return (
    <div
      style={
        {
          // backgroundColor: darkMode ? "black" : "white",
          // width: "100vw",
          // height: "100vh",
        }
      }
    >
      <Button
      // onClick={() => {
      //   setDarkMode(!darkMode);
      //   setCount(count + 1);
      //   console.log("=============>🤣", count);
      // }}
      />
      <UserCard user={{ id: 1, name: "John", email: "john@example.com" }} />
      <UserCard user={{ id: 2, name: "mas" }} />

      <Counter
        increment={(e: React.MouseEvent<HTMLButtonElement>) => {
          console.log(e);
          setCount(count + 1);
        }}
        decrement={(e: React.MouseEvent<HTMLButtonElement>) => {
          console.log(e);
          setCount(count - 1);
        }}
        count={count}
      />
    </div>
  );
}
