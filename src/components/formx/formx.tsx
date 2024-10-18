"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Inputx, { InputXType } from "./inputx";
import PasswordX from "./passwordx";
import SelectX from "./selectx";
import SearchX from "./searchx";

type Controlled =
  | { isControlled?: true; value: string; setValue: (value: string) => void }
  | { isControlled?: false };

type SelectType =
  | {
      type: "select";
      options: { label: string; value: string }[];
    }
  | {
      type: "search";
      options: { label: string; value: string }[];
    }
  | { type: InputXType | "password" | "date" | "time" };

interface ColumnType {
  label: string;
  defaultValue?: string;
  errorText?: string;
  name: string;
  // type: InputXType | "password" | "date" | "time";
  onChange?: (value: string) => void;
}

export interface FromXData {
  customRowStyle?: string;
  columns: (ColumnType & Controlled & SelectType)[];
}

interface Props {
  defaultStyle?: {
    form?: string;
    column?: string;
    row?: string;
    buttonRow?: string;
  };
  data: FromXData[];
  handleSubmit: (data: any) => void;
  hasCancel?: boolean;
  handleCancel?: () => void;
  submitText?: string;
}

const FormX = ({
  defaultStyle = { form: "", column: "", row: "", buttonRow: "" },
  data,
  handleSubmit,
  hasCancel = true,
  handleCancel = () => {},
  submitText = "Submit",
}: Props) => {
  const [AllData, setAllData] = useState({});

  return (
    <form
      onSubmit={() => handleSubmit(AllData)}
      className={cn("flex flex-col w-full gap-2", defaultStyle.form)}
    >
      {data.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={cn(
            "flex flex-row w-full gap-4",
            defaultStyle.row,
            row.customRowStyle
          )}
        >
          {row.columns.map((col, colIdx) => {
            if (
              col.type !== "date" &&
              col.type !== "time" &&
              col.type !== "password" &&
              col.type !== "select" &&
              col.type !== "search"
            ) {
              return (
                <Inputx
                  key={`${rowIdx}-${colIdx}`}
                  defaultStyle={defaultStyle.column}
                  type={col.type}
                  errorText={col?.errorText || ""}
                  defaultValue={col?.defaultValue || ""}
                  label={col.label}
                  name={col.name}
                  onChange={col?.onChange || (() => {})}
                  {...(col.isControlled
                    ? {
                        state: col.value,
                        setState: col.setValue,
                      }
                    : {})}
                  AllData={AllData}
                  setAllData={setAllData}
                />
              );
            } else if (col.type === "password") {
              return (
                <PasswordX
                  key={`${rowIdx}-${colIdx}`}
                  defaultStyle={defaultStyle.column}
                  AllData={AllData}
                  setAllData={setAllData}
                  label={col.label}
                  defaultValue={col?.defaultValue || ""}
                  errorText={col?.errorText || ""}
                  name={col.name}
                  onChange={col?.onChange || (() => {})}
                  {...(col.isControlled
                    ? {
                        state: col.value,
                        setState: col.setValue,
                      }
                    : {})}
                />
              );
            } else if (col.type == "select") {
              return (
                <SelectX
                  key={`${rowIdx}-${colIdx}`}
                  defaultStyle={defaultStyle.column}
                  options={col.options}
                  errorText={col?.errorText || ""}
                  defaultValue={col?.defaultValue || ""}
                  label={col.label}
                  name={col.name}
                  onChange={col?.onChange || (() => {})}
                  {...(col.isControlled
                    ? {
                        state: col.value,
                        setState: col.setValue,
                      }
                    : {})}
                  AllData={AllData}
                  setAllData={setAllData}
                />
              );
            } else if (col.type == "search") {
              return (
                <SearchX
                  key={`${rowIdx}-${colIdx}`}
                  defaultStyle={defaultStyle.column}
                  errorText={col?.errorText || ""}
                  defaultValue={col?.defaultValue || ""}
                  label={col.label}
                  name={col.name}
                  onChange={col?.onChange || (() => {})}
                  {...(col.isControlled
                    ? {
                        state: col.value,
                        setState: col.setValue,
                      }
                    : {})}
                  AllData={AllData}
                  setAllData={setAllData}
                  options={col.options}
                />
              );
            }
          })}
        </div>
      ))}
      <div
        className={cn(
          "flex flex-row justify-end gap-4 mt-2 w-full",
          defaultStyle.buttonRow
        )}
      >
        <button
          className={cn(
            "bg-slate-300 border border-slate hover:bg-slate-200 px-3 py-2 rounded-md font-medium text-black hidden",
            { block: hasCancel }
          )}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button className="bg-purple-500 hover:bg-purple-400 px-3 py-2 rounded-md font-medium text-white">
          {submitText}
        </button>
      </div>
    </form>
  );
};

export default FormX;
