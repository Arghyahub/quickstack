"use client";
import React, { useEffect, useState } from "react";
import useToaster from "./toaster";
import { cn } from "@/lib/utils";

const Toast = () => {
  const { message, time, type, reset } = useToaster();
  const [Open, setOpen] = useState(false);

  useEffect(() => {
    if (message.length != 0) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        reset();
      }, time);
    }
  }, [message]);

  return (
    <div
      className={cn(
        "px-4 py-2 rounded-lg absolute top-7 duration-[1000] transition-shadow right-16 max-w-[80%] hidden text-white font-semibold",
        {
          "flex flex-row transition-opacity": Open,
          "bg-green-400": type === "success",
          "bg-red-400": type === "error",
          "bg-blue-400": type === "info",
          "bg-yellow-400": type === "warning",
        }
      )}
    >
      {message}
    </div>
  );
};

export default Toast;
