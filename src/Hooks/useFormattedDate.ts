import { useState, useEffect } from "react";

export const useFormattedDate = (date: string) => {
  const [formattedDate, setFormattedDate] = useState("");

  const stringWithComma = (str: string): string => {
    const lastWordIndex = str.length;
    const commaIndex = lastWordIndex - 5;
    const stringWithoutComma =
      str.slice(0, commaIndex + 1) +
      str.slice(commaIndex + 1, lastWordIndex) +
      str.slice(lastWordIndex);
    return (
      stringWithoutComma.slice(0, commaIndex) +
      "," +
      stringWithoutComma.slice(commaIndex)
    );
  };

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formatted = new Date(date).toLocaleDateString("es-ES", options);

    setFormattedDate(stringWithComma(formatted));
  }, [date]);

  return formattedDate;
};
