import { useState, useEffect } from "react";

const useFormattedDate = (date: string) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formatted = new Date(date).toLocaleDateString("es-ES", options);

    setFormattedDate(formatted);
  }, [date]);

  return formattedDate;
};

export default useFormattedDate;
