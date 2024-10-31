import { cn } from "@/lib/utils";
import { Eye, EyeOff, Info } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

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
  placeholder?: string;
}

const PasswordX = ({
  defaultStyle,
  errorText,
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
  const [ShowPassword, setShowPassword] = useState(false);

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
      <div className="flex flex-row items-center w-full">
        <input
          type={ShowPassword ? "text" : "password"}
          className={cn(
            "border-2 border-slate-400 px-2 py-1 rounded-l-lg w-full border-r-0 outline-none",
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
        <button
          type="button"
          className={cn(
            "border-2 border-l-0 border-slate-400 h-[35px] rounded-r-lg hidden pr-1 hover:text-green-600",
            { block: !ShowPassword }
          )}
          onClick={() => setShowPassword(!ShowPassword)}
        >
          <Eye />
        </button>
        <button
          type="button"
          className={cn(
            "border-2 border-l-0 border-slate-400 h-[35px] rounded-r-lg hidden pr-1 hover:text-green-600",
            { block: ShowPassword }
          )}
          onClick={() => setShowPassword(!ShowPassword)}
        >
          <EyeOff />
        </button>
      </div>
    </div>
  );
};

export default PasswordX;
