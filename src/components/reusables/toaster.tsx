import { create } from "zustand";

export type ToasterType = "success" | "error" | "info" | "warning";

export interface Toaster {
  message: string;
  time: number;
  type: ToasterType;
  Toaster: {
    success: (message: string, time?: number) => void;
    error: (message: string, time?: number) => void;
    info: (message: string, time?: number) => void;
    warning: (message: string, time?: number) => void;
  };
  reset: () => void;
}

/**
 * Just call Toaster.success("message") to show a success toast
 * const Toaster = useToaster(state => state.Toaster);
 */
const useToaster = create<Toaster>((set) => ({
  message: "",
  time: 4000,
  type: "success",
  Toaster: {
    success: (message, time = 4000) => set({ message, time, type: "success" }),
    error: (message, time = 4000) => set({ message, time, type: "error" }),
    info: (message, time = 4000) => set({ message, time, type: "info" }),
    warning: (message, time = 4000) => set({ message, time, type: "warning" }),
  },
  reset: () => set({ message: "", time: 4000, type: "success" }),
}));

export default useToaster;
