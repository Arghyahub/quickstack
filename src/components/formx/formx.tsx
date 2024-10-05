"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Inputx, { InputXType } from "./inputx";

type Controlled =
  | { isControlled?: true; value: string; setValue: (value: string) => void }
  | { isControlled?: false };

interface ColumnType {
  label: string;
  defaultValue?: string;
  errorText: string;
  name: string;
  type: InputXType | "password" | "date" | "time";
}

export interface FromXData {
  customRowStyle?: string;
  columns: (ColumnType & Controlled)[];
}

interface Props {
  defaultStyle?: {
    form: string;
    column: string;
    row: string;
  };
  data: FromXData[];
  handleSubmit: (data: any) => void;
  hasCancel?: boolean;
  handleCancel?: () => void;
  submitText?: string;
}

const FormX = ({
  defaultStyle = { form: "", column: "", row: "" },
  data,
  handleSubmit,
  hasCancel = true,
  handleCancel = () => {},
  submitText = "Submit",
}: Props) => {
  const [AllData, setAllData] = useState({});
  return (
    <form className={cn("", defaultStyle.form)}>
      {data.map((row, rowIdx) => (
        <div key={rowIdx} className={cn("", defaultStyle.row)}>
          {row.columns.map((col, colIdx) => {
            if (
              col.type !== "date" &&
              col.type !== "time" &&
              col.type !== "password"
            ) {
              return (
                <Inputx
                  key={`${rowIdx}-${colIdx}`}
                  defaultStyle={defaultStyle.column}
                  customColStyle={row?.customRowStyle || ""}
                  type={col.type}
                  errorText={col.errorText}
                  defaultValue={col?.defaultValue || ""}
                  label={col.label}
                  name={col.name}
                  {...(col.isControlled
                    ? {
                        state: col.value,
                        setState: col.setValue,
                      }
                    : {})}
                />
              );
            } else {
              return <div key={colIdx}>Yo</div>;
            }
          })}
        </div>
      ))}
    </form>
  );
};

export default FormX;
