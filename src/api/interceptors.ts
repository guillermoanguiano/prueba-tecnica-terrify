import { AxiosInstance, AxiosResponse } from "axios";


const onRequest = async (config: any) => {
  return config;
};

const onRequestError = (error: Error) => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse) => {
  return response;
};

const onResponseError = async (error: Error) => {
  return Promise.reject(error);
};

export const setupInterceptorsTo = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};