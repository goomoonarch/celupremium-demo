/* eslint-disable react/prop-types */
import { createContext, useReducer, useCallback, useEffect, useState } from "react";

export const BagContext = createContext();

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
    case "SET_BAG":
      return action.bag;
    default:
      return state;
  }
};

const saveBagToLocalStorage = (bag) => {
  localStorage.setItem("bag", JSON.stringify(bag));
};

const loadBagFromLocalStorage = () => {
  const savedBag = localStorage.getItem("bag");
  return savedBag ? JSON.parse(savedBag) : [];
};

export function BagProvider({ children }) {
  const [bag, dispatch] = useReducer(bagReducer, null, loadBagFromLocalStorage);
  const [lastAddedProduct, setLastAddedProduct] = useState(null);

  useEffect(() => {
    saveBagToLocalStorage(bag);
  }, [bag]);

  const addToBag = useCallback((product) => {
    dispatch({ type: "ADD_TO_BAG", product });
    setLastAddedProduct(product);
  }, []);

  const clearBag = useCallback(() => {
    dispatch({ type: "CLEAR_BAG" });
  }, []);

  return (
    <BagContext.Provider 
      value={{ 
        bag, 
        addToBag, 
        clearBag, 
        lastAddedProduct, 
        setLastAddedProduct 
      }}
    >
      {children}
    </BagContext.Provider>
  );
}