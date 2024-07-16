import { useMemo } from "react";
import { shuffle } from "../functions/shuffle";

export function useFamilyMap(phoneFamily) {
  return useMemo(() => {
    const regularPhones = phoneFamily
      .map((item) => Object.keys(item)[0])
      .filter((key) => !key.includes("pro"));

    const proPhones = phoneFamily
      .map((item) => Object.keys(item)[0])
      .filter((key) => key.includes("pro"));

    let regularphones = phoneFamily
      .filter((item) => regularPhones.includes(Object.keys(item)[0]))
      .flatMap((item) => [...Object.values(item)[0].allstockrefenreces]);

    let prophones = phoneFamily
      .filter((item) => proPhones.includes(Object.keys(item)[0]))
      .flatMap((item) => [...Object.values(item)[0].allstockrefenreces]);

    regularphones = shuffle(regularphones);
    prophones = shuffle(prophones);

    return { regularphones, prophones };
  }, [phoneFamily]);
}
