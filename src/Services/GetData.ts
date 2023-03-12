import axios, { AxiosRequestConfig } from "axios";
import { FetchDataProps } from "../interfaces/FetchData";
import { Product } from "../interfaces/Products";

export async function consultarAPI({
  url,
  metodo = "GET",
}: FetchDataProps): Promise<Product[]> {
  try {
    const config: AxiosRequestConfig = {
      method: metodo,
      url: url,
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("Error al consultar API:", error);
    throw error;
  }
}
