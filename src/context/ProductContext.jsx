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
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [product, setProduct] = useState(null);
  const [variant, setVariant] = useState(null);

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
    const loadProduct = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };

    loadProduct();
  }, [slug]);

  useEffect(() => {
    if (!isLoading && product && selectedColor && selectedCapacity) {
      const newVariant = product.allstockrefenreces.find((v) => {
        return (
          v.choices.color === selectedColor &&
          v.choices.capacity === selectedCapacity
        );
      });
      if (newVariant) {
        setVariant(newVariant);
        navigate(`/buyiphone/${product.slug}/${newVariant.slug}`, {
          replace: true,
        });
      }
    }
  }, [selectedColor, selectedCapacity, product, navigate, isLoading]);

  const handleColorSelect = (color) => {
    if (!product) return;
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
    if (!product) return false;
    return product.allstockrefenreces.some(
      (v) => v.choices.color === color && v.stock > 0
    );
  };

  const isCapacityInStock = (capacity) => {
    if (!product) return false;
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
        isLoading,
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