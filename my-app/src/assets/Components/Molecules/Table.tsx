import { AxiosInstance } from "axios";
import { defaultInstance } from "../../service/API";

const CarService = (api: AxiosInstance = defaultInstance) => ({
  getCarData: async () => {
    try {
      const response = await api.get("cars");
      return response["data"];
    } catch (error) {
      console.error("Error accured");
    }
  },

  getCarById: async (carId: any) => {
    try {
      const response = await api.get(`cars/${carId}`);
      return response.data;
    } catch (error) {
      console.error("Error accured");
    }
  },

  deleteCar: async (carId: any) => {
    try {
      const response = await api.delete(`cars/${carId}`);
      return response.data;
    } catch (error) {
      console.error("Error accured");
    }
  },

  createCar: async (Name: any, Year: any) => {
    try {
      const data = { Name, Year };

      const response = await api.post("cars", data);
      return response.data;
    } catch (error) {
      console.error("Error accured");
    }
  },

  updateCar: async (carId: any, Name: any, Year: any) => {
    try {
      const data = { Name, Year };

      const response = await api.put(`cars/${carId}`, data);
      return response.data;
    } catch (error) {
      console.error("Error accured");
    }
  },
});

export default CarService;
