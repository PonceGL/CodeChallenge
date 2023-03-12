import { useEffect, useState } from "react";
import { consultarAPI } from "../Services/GetData";

import { Product } from "../interfaces/Products";
import { FetchDataProps } from "../interfaces/FetchData";
interface FetchDataResponse {
  data: Product[];
  isLoading: boolean;
  error: Error | null;
}

export const useConsultarAPI = (props: FetchDataProps): FetchDataResponse => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData() {
    try {
      const result = await consultarAPI(props);
      if (result) {
        setData(result);
      }
    } catch (err) {
      setError(err as Error | null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const { url } = props;

    if (url !== "") {
      fetchData();
    }
  }, []);

  return { data, isLoading, error };
};
