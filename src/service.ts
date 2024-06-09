import axios from "axios";
import { CarApiInterface } from "@/types";

const API_URL = "http://localhost:3001/api/cars";

export const getCars = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateCars = async (cars: Array<CarApiInterface>) => {
  const response = await axios.post(API_URL, cars);
  return response.data;
};
