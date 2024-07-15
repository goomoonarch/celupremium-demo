import { useMemo } from "react";

export function useFamilyMap(phoneFamily) {

  return useMemo(() => {
    
    const regularPhones = phoneFamily
      .map((item) => Object.keys(item)[0])
      .filter((key) => !key.includes("pro"));

    const proPhones = phoneFamily
      .map((item) => Object.keys(item)[0])
      .filter((key) => key.includes("pro"));
    const regularphones = phoneFamily
      .filter((item) => regularPhones.includes(Object.keys(item)[0]))
      .flatMap((item) => [...Object.values(item)[0].allstockrefenreces]);

    const prophones = phoneFamily
      .filter((item) => proPhones.includes(Object.keys(item)[0]))
      .flatMap((item) => [...Object.values(item)[0].allstockrefenreces]);

    return { regularphones, prophones };

  }, [phoneFamily]);
}
