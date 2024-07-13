import { useMemo } from "react";

export function useFamilyMap(phoneFamily) {
  return useMemo(() => {
    const regularPhones = ["iphone15", "iphone15plus"];
    const proPhones = ["iphone15pro", "iphone15promax"];

    const regularphones = phoneFamily
      .filter((item) => regularPhones.includes(Object.keys(item)[0]))
      .flatMap((item) => [...Object.values(item)[0].allstockrefenreces]);

    const prophones = phoneFamily
      .filter((item) => proPhones.includes(Object.keys(item)[0]))
      .flatMap((item) => [...Object.values(item)[0].allstockrefenreces]);

    return { regularphones, prophones };
  }, [phoneFamily]);
}
