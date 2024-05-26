import axios, { AxiosInstance } from "axios";
import { defaultInstance } from "./API";

defaultInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const carInformationService = (
  api: AxiosInstance = defaultInstance
) => ({
  getcarInformation: async () => {
    const data = await api.get(`car`).catch((error) => {
      console.log(error);
    });
    return data.data.slice(-10);
  },

  getcarById: async (id: Number) => {
    const data = await api.get(`car/${id}`).catch((error) => {
      console.log(error);
    });
    return data.data;
  },

  deletecarById: async (id) => {
    try {
      const response = await api.delete(`car/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error by delete", error);
      throw error;
    }
  },

  addcar: async (street_name, importdate) => {
    try {
      const data = { street_name, importdate };
      const response = await api.post("car", data);
      return response.data;
    } catch (error) {
      console.error("Error by add", error);
      throw error;
    }
  },

  updatecar: async (id: Number, street_name: any, importdate: any) => {
    try {
      const data = { id, street_name, importdate };
      const response = await api.put(`car/${id}`, data);
    } catch (error) {
      console.log("Erorr by update", error);
      throw error;
    }
  },
});

export default carInformationService;
