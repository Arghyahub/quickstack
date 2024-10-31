import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import React, { useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  defaultStyle?: string;
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
  options: { label: string; value: string }[];
}

const SelectX = ({
  defaultStyle,
  errorText,
  defaultValue,
  label = "",
  name,
  options,
  state,
  setState,
  AllData,
  setAllData,
  onChange = (val) => {},
}: Props) => {
  //   const ipref = useRef<null | HTMLInputElement>(null);

  //   useEffect(() => {
  //     if (ipref !== null && ipref.current !== null) {
  //       ipref.current.value = defaultValue;
  //       setAllData({ ...AllData, [name]: defaultValue });
  //     }
  //   }, [ipref]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex flex-row justify-between">
        <label htmlFor={name} className="ml-[4px]">
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
      <Select
        name={name}
        {...(state !== undefined ? { value: state } : {})}
        defaultValue={defaultValue}
        onValueChange={(e) => {
          if (setState !== undefined) {
            setState(e);
          }
          setAllData({ ...AllData, [name]: e });
          onChange(e);
        }}
      >
        <SelectTrigger
          className={cn(
            "border-2 border-slate-400 ring-0 w-full",
            defaultStyle
          )}
        >
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, ind) => (
            <SelectItem key={`${name}-${ind}`} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectX;
