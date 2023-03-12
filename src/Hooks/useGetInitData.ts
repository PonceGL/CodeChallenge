import { useEffect, useState } from "react";
import { API_URL } from "@env";
import { Product } from "../interfaces/Products";

import { sumRedemptionPoints } from "../utils/sumRedemptionPoints";
import { useConsultarAPI } from "./useConsultarAPI";

interface FetchDataResponse {
  data: Product[];
  isLoading: boolean;
  totalPoints: number;
  error: Error | null;
}

export const useGetInitData = (): FetchDataResponse => {
  const { data, isLoading, error } = useConsultarAPI({
    url: API_URL,
  });
  const [totalPoints, setTotalPoints] = useState<number>(0);

  useEffect(() => {
    if (data) {
      const total = sumRedemptionPoints(data);
      setTotalPoints(total);
    }
  }, [data]);

  return { data, isLoading, totalPoints, error };
};
