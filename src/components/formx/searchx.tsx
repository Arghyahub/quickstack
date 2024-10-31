import useDebounce from "@/lib/hooks/use-debounce";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import useClickOutside from "@/lib/hooks/use-click-outside";

export type InputXType = "text" | "number" | "email";

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

const SearchX = ({
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
  options,
}: Props) => {
  const ipref = useRef<null | HTMLInputElement>(null);
  const [SearchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(SearchTerm);
  const [IsSearching, setIsSearching] = useState(false);
  useClickOutside(ipref, () => setIsSearching(false));

  useEffect(() => {
    if (ipref !== null && ipref.current !== null) {
      ipref.current.value = defaultValue;
      setAllData({ ...AllData, [name]: defaultValue });
    }
  }, [ipref]);

  useEffect(() => {
    if (debouncedValue?.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [debouncedValue]);

  const filteredOptions = useMemo(() => {
    if (debouncedValue.length > 0) {
      return options.filter((option) =>
        option.label.toLowerCase().includes(debouncedValue.toLowerCase())
      );
    }
    return [];
  }, [debouncedValue, options]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex flex-row justify-between">
        <label htmlFor={name} className="ml-[6px]">
          {label}
        </label>
        <div
          className={cn(
            "relative flex flex-row justify-end items-center gap-1 w-full",
            { hidden: errorText?.length == 0 }
          )}
        >
          <Info className="cursor-pointer peer" />
          <p className="peer-hover:block right-6 z-10 absolute hidden p-1 rounded-lg w-[90%] font-semibold text-ellipsis text-end text-red-500 text-sm transition-opacity duration-500">
            {errorText}
          </p>
        </div>
      </div>

      <div className="relative flex flex-col">
        <input
          type={"text"}
          className={cn(
            "border-2 border-slate-400 m-1 px-2 py-1 rounded-lg w-full",
            defaultStyle
          )}
          name={name}
          ref={ipref}
          {...(state !== undefined && { value: state })}
          onChange={(e) => {
            if (setState !== undefined) {
              setState(e.target.value);
            }
            setSearchTerm(e.target.value);
            onChange(e.target.value);
          }}
        />
        {IsSearching && (
          <div className="top-full right-0 left-1 z-30 absolute flex flex-col border-slate-400 border-x-2 bg-white px-2 pb-2 border-b-2 rounded-b-lg w-full max-h-52 overflow-y-auto">
            {filteredOptions.map((option, idx) => (
              <button
                key={`option-${idx}`}
                className="hover:bg-slate-200 p-1 text-left"
                onClick={() => {
                  setAllData({ ...AllData, [name]: option.value });
                  onChange(option.label);
                  if (ipref && ipref.current) {
                    ipref.current.value = option.label;
                  }
                  setIsSearching(false);
                }}
              >
                <p>{option.label}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchX;
