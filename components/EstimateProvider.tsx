"use client";
import { createContext, useContext, useState } from "react";

const Ctx = createContext<{ estimate: string; setEstimate: (s: string) => void }>({
  estimate: "",
  setEstimate: () => {},
});

export function EstimateProvider({ children }: { children: React.ReactNode }) {
  const [estimate, setEstimate] = useState("");
  return <Ctx.Provider value={{ estimate, setEstimate }}>{children}</Ctx.Provider>;
}

export const useEstimate = () => useContext(Ctx);
