/* eslint-disable react/prop-types */
import {
  createContext,
  useReducer,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";

export const BagContext = createContext();

const priceToNumber = (priceString) => {
  return parseFloat(priceString.replace(/['.]/g, "").replace("'", "."));
};

const formatToCOP = (number) => {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formattedNumber = formatter.format(number);
  return formattedNumber
    .replace(/\s/g, "")
    .replace("COP", "")
    .replace(/\./g, ".")
    .replace(/,/g, ".");
};

const bagReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BAG": {
      const productIndex = state.findIndex(
        (item) => item.id === action.product.id
      );
      if (productIndex >= 0) {
        return state.map((item, index) => {
          if (index === productIndex) {
            const newQuantity = item.quantity + 1;
            const itemPrice = priceToNumber(item.price);
            const newTotalPrice = itemPrice * newQuantity;
            return {
              ...item,
              quantity: newQuantity,
              totalprice: formatToCOP(newTotalPrice),
              numericPrice: newTotalPrice,
            };
          }
          return item;
        });
      } else {
        const itemPrice = priceToNumber(action.product.price);
        const newItem = {
          ...action.product,
          quantity: 1,
          totalprice: action.product.price,
          numericPrice: itemPrice,
        };
        return [...state, newItem];
      }
    }
    case "CLEAR_BAG":
      return [];
    case "SET_BAG":
      return action.bag.map((item) => {
        const itemPrice = priceToNumber(item.price);
        const totalPrice = itemPrice * item.quantity;
        return {
          ...item,
          totalprice: formatToCOP(totalPrice),
          numericPrice: totalPrice,
        };
      });
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

  const calculateTotal = useCallback(() => {
    return bag.reduce((total, item) => {
      return total + (item.numericPrice || 0);
    }, 0);
  }, [bag]);

  const formattedTotal = useMemo(() => {
    return formatToCOP(calculateTotal());
  }, [calculateTotal]);

  const calculateMonthlyPayment = useCallback(() => {
    const total = calculateTotal();
    return total / 12;
  }, [calculateTotal]);

  const formattedMonthlyPayment = useMemo(() => {
    return formatToCOP(calculateMonthlyPayment());
  }, [calculateMonthlyPayment]);

  return (
    <BagContext.Provider
      value={{
        bag,
        addToBag,
        clearBag,
        lastAddedProduct,
        setLastAddedProduct,
        calculateTotal,
        formattedTotal,
        calculateMonthlyPayment,
        formattedMonthlyPayment,
      }}
    >
      {children}
    </BagContext.Provider>
  );
}