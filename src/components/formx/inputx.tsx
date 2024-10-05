import { cn } from "@/lib/utils";
import React from "react";

export type InputXType = "text" | "number" | "email";

interface Props {
  defaultStyle?: string;
  customColStyle?: string;
  type: InputXType;
  value: string;
  errorText: string;
  defaultValue: string;
  label: string;
  name: string;
}

const Inputx = ({ defaultStyle, customColStyle, type }: Props) => {
  return (
    <input
      type={type}
      className={cn(
        "border-2 border-slate-400 m-1 px-2 py-1 rounded-lg w-full",
        defaultStyle,
        customColStyle
      )}
      defaultValue={defaultStyle}
    />
  );
};

export default Inputx;
