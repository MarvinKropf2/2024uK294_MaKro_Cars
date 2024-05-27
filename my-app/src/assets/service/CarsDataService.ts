import { AxiosInstance } from "axios";
import { defaultInstance } from "./API";

const CarService = (api: AxiosInstance = defaultInstance) => ({
  getCarData: async () => {
    try {
      const response = await api.get("cars");
      return response.data;
    } catch (error) {
      console.error("Error occurred", error);
    }
  },
  getCarById: async (carId: any) => {
    try {
      const response = await api.get(`cars/${carId}`);
      return response.data;
    } catch (error) {
      console.error("Error occurred", error);
    }
  },
  deleteCar: async (carId: any) => {
    try {
      const response = await api.delete(`cars/${carId}`);
      return response.data;
    } catch (error) {
      console.error("Error occurred", error);
    }
  },
  createCar: async (Name: any, Year: any) => {
    try {
      const data = { Name, Year };
      const response = await api.post("cars", data);
      return response.data;
    } catch (error) {
      console.error("Error occurred", error);
    }
  },
  updateCar: async (carId: any, Name: any, Year: any) => {
    try {
      const data = { Name, Year };
      const response = await api.put(`cars/${carId}`, data);
      return response.data;
    } catch (error) {
      console.error("Error occurred", error);
    }
  },
});

export default CarService;
