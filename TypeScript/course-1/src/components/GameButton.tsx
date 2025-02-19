import React from "react";

import { type Color } from "../lib/types";

type ButtonProps = {
  backgroundColor?: Color;
  fontSize?: number;
  onClick?: () => void;
  children?: React.ReactNode;
};

function GameButton({
  backgroundColor,
  fontSize,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, fontSize: fontSize }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default GameButton;
