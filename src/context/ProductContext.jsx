/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { phoneFam } from "../assets";

const ProductContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [product, setProduct] = useState("");
  const [variant, setVariant] = useState("");

  const getProductBySlug = (slug) => {
    for (let family of phoneFam) {
      for (let productKey in family.stock[0]) {
        const product = family.stock[0][productKey];
        if (product.slug === slug) {
          return product;
        }
      }
    }
    return null;
  };

  useEffect(() => {
    const prod = getProductBySlug(slug);
    if (prod) {
      setProduct(prod);
      const availableVariant = prod.allstockrefenreces.find((v) => v.stock > 0);
      if (availableVariant) {
        setVariant(availableVariant);
      }
    }
  }, [slug]);

  useEffect(() => {
    const prod = getProductBySlug(slug);
    if (prod) {
      setProduct(prod);
      const availableVariant = prod.allstockrefenreces.find((v) => v.stock > 0);
      if (availableVariant) {
        setVariant(availableVariant);
        setSelectedColor(availableVariant.choices.color);
        setSelectedCapacity(availableVariant.choices.capacity);
      }
    }
  }, [slug]);

  useEffect(() => {
    if (product && selectedColor && selectedCapacity) {
      const variant = product.allstockrefenreces.find((v) => {
        return (
          v.choices.color === selectedColor &&
          v.choices.capacity === selectedCapacity
        );
      });
      if (variant) {
        setVariant(variant);
        navigate(`/buyiphone/${product.slug}/${variant.slug}`, {
          replace: true,
        });
      }
    }
  }, [selectedColor, selectedCapacity, product, navigate]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    const availableCapacity = product.allstockrefenreces.find(
      (v) => v.choices.color === color && v.stock > 0
    )?.choices.capacity;
    if (availableCapacity) {
      setSelectedCapacity(availableCapacity);
    }
  };

  const handleCapacitySelect = (capacity) => {
    setSelectedCapacity(capacity);
  };

  const isColorInStock = (color) => {
    return product.allstockrefenreces.some(
      (v) => v.choices.color === color && v.stock > 0
    );
  };

  const isCapacityInStock = (capacity) => {
    return product.allstockrefenreces.some(
      (v) =>
        v.choices.color === selectedColor &&
        v.choices.capacity === capacity &&
        v.stock > 0
    );
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        variant,
        setVariant,
        handleColorSelect,
        isColorInStock,
        handleCapacitySelect,
        isCapacityInStock,
        selectedColor,
        selectedCapacity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
