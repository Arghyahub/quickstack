import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import React, { useEffect, useRef } from "react";

export type InputXType = "text" | "number" | "email";

interface Props {
  defaultStyle?: string;
  type: InputXType;
  value?: string;
  errorText: string;
  defaultValue: string;
  label?: string;
  name: string;
  state?: string;
  setState?: (value: string) => void;
  AllData: object;
  setAllData: React.Dispatch<React.SetStateAction<{}>>;
  onChange?: (val: string) => void;
  placeholder?: string;
}

const Inputx = ({
  defaultStyle,
  type,
  errorText = "",
  defaultValue,
  label = "",
  name,
  state,
  setState,
  AllData,
  setAllData,
  onChange = (val) => {},
  placeholder,
}: Props) => {
  const ipref = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (ipref !== null && ipref.current !== null) {
      ipref.current.value = defaultValue;
      setAllData({ ...AllData, [name]: defaultValue });
    }
  }, [ipref]);

  return (
    <div className="flex flex-col gap-1 p-1 w-full">
      <div className="flex flex-row justify-between w-full">
        <label htmlFor={name} className="ml-[6px]">
          {label}
        </label>
        <div
          className={cn(
            "relative flex flex-row justify-end items-center gap-1 w-full",
            { hidden: errorText.length == 0 }
          )}
        >
          <Info className="cursor-pointer peer" />
          <p className="peer-hover:block right-6 z-10 absolute hidden p-1 rounded-lg w-[90%] font-semibold text-ellipsis text-end text-red-500 text-sm transition-opacity duration-500">
            {errorText}
          </p>
        </div>
      </div>
      <input
        type={type}
        className={cn(
          "border-2 border-slate-400 my-1 px-2 py-1 rounded-lg w-full",
          defaultStyle
        )}
        name={name}
        ref={ipref}
        {...(placeholder !== undefined && { placeholder })}
        {...(state !== undefined && { value: state })}
        onChange={(e) => {
          if (setState !== undefined) {
            setState(e.target.value);
          }
          setAllData({ ...AllData, [name]: e.target.value });
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default Inputx;
