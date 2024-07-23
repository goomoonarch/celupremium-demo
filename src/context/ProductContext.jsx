/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { phoneFam } from "../assets";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const { slug, variant: variantSlug } = useParams();
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

  const findValidVariant = (variants, targetSlug = null) => {
    // Primero, busca una variante que coincida con el slug y tenga stock > 0
    if (targetSlug) {
      const matchingVariant = variants.find(
        (v) => v.slug === targetSlug && v.stock > 0
      );
      if (matchingVariant) return matchingVariant;
    }

    // Si no se encuentra, busca la primera variante con stock > 0 y slug definido
    return variants.find((v) => v.stock > 0 && v.slug);
  };

  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      const prod = getProductBySlug(slug);
      if (prod) {
        setProduct(prod);
        const targetVariant = findValidVariant(
          prod.allstockrefenreces,
          variantSlug
        );
        if (targetVariant) {
          setVariant(targetVariant);
          setSelectedColor(targetVariant.choices.color);
          setSelectedCapacity(targetVariant.choices.capacity);
        } else {
          // Si no se encuentra una variante válida, puedes manejar este caso
          console.log("No se encontró una variante válida");
          // Opcionalmente, podrías navegar a una página de error o a la página principal
          // navigate('/');
        }
      }
      setIsLoading(false);
    };

    loadProduct();
  }, [slug, variantSlug, navigate]);

  useEffect(() => {
    if (!isLoading && product && selectedColor && selectedCapacity) {
      const newVariant = findValidVariant(
        product.allstockrefenreces.filter(
          (v) =>
            v.choices.color === selectedColor &&
            v.choices.capacity === selectedCapacity
        )
      );

      if (newVariant && newVariant.slug) {
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
    const availableVariant = product.allstockrefenreces.find(
      (v) => v.choices.color === color && v.stock > 0 && v.slug
    );
    if (availableVariant) {
      setSelectedCapacity(availableVariant.choices.capacity);
    }
  };

  const handleCapacitySelect = (capacity) => {
    setSelectedCapacity(capacity);
  };

  const isColorInStock = (color) => {
    if (!product) return false;
    return product.allstockrefenreces.some(
      (v) => v.choices.color === color && v.stock > 0 && v.slug
    );
  };

  const isCapacityInStock = (capacity) => {
    if (!product) return false;
    return product.allstockrefenreces.some(
      (v) =>
        v.choices.color === selectedColor &&
        v.choices.capacity === capacity &&
        v.stock > 0 &&
        v.slug
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
