import { useContext } from "react";
import { BagContext } from "../context/bag";

export const useBag = () => {
  const context = useContext(BagContext);
  if (context === undefined) {
    throw new Error("useBag must be used within a BagProvider");
  }
  return context;
};
