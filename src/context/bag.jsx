/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext, useCallback } from "react";

const BagContext = createContext();

const bagReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BAG": {
      const productIndex = state.findIndex(
        (item) => item.id === action.product.id
      );
      if (productIndex >= 0) {
        return state.map((item, index) =>
          index === productIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.product, quantity: 1 }];
      }
    }
    case "CLEAR_BAG":
      return [];
    default:
      return state;
  }
};

export function BagProvider({ children }) {
  const [bag, dispatch] = useReducer(bagReducer, []);

  const addToBag = useCallback((product) => {
    dispatch({ type: "ADD_TO_BAG", product });
  }, []);

  const clearBag = useCallback(() => {
    dispatch({ type: "CLEAR_BAG" });
  }, []);

  console.log(bag);

  return (
    <BagContext.Provider value={{ bag, addToBag, clearBag }}>
      {children}
    </BagContext.Provider>
  );
}

export const useBag = () => {
  const context = useContext(BagContext);
  if (context === undefined) {
    throw new Error("useBag must be used within a BagProvider");
  }
  return context;
};
