"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const Offline = () => {
  const [Online, setOnline] = useState(navigator?.onLine ?? true);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "top-0 right-0 bottom-0 left-0 absolute flex flex-col items-center bg-black opacity-75 text-white",
          { hidden: Online }
        )}
      >
        <p className="mt-10 font-semibold text-xl">You are offline</p>
      </div>
    </>
  );
};

export default Offline;
