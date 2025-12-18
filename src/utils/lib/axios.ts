import Axios, { type AxiosInstance } from "axios";

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = Axios.create({
    baseURL,
    // withCredentials: true,
  });

  instance.interceptors.request.use((config) => {
    if (!config.headers["Content-Type"] && !(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    if (import.meta.env.DEV) {
      console.log("[Axios Request]", {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data,
      });
    }

    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      const url = response.config.url ?? "";
      if (import.meta.env.DEV) {
        console.log("[Axios Response]", {
          status: response.status,
          url,
          data: response.data,
        });
      }
      const data = response.data;

      if (!("status" in data)) {
        response.data = {
          status: "success",
          message: data?.message || "Request successful",
          data,
        };
      }

      return response;
    },
    (error) => {
      const url = error.config?.url ?? "";
      if (import.meta.env.DEV) {
        console.error("[Axios Error]", {
          status: error.response?.status,
          url,
          data: error.response?.data || error.message,
        });
      }
      // Normalize error response
      if (error.response) {
        const data = error.response.data;
        error.response.data = {
          status: "error",
          message: data?.message || "Something went wrong",
          data: null,
        };
      } else {
        error.response = {
          status: "error",
          message: error.message || "Network error",
          data: null,
        };
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export const baseUrl = createAxiosInstance(import.meta.env.VITE_BASEURL);
