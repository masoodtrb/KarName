import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[response error JSON]`, error.toJSON());
  console.error(`[response error PURE]`, error);
  return Promise.reject(error);
};

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

export const axiosAgent = (() => {
  return axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000 * 50,
  });
})();

setupInterceptorsTo(axiosAgent);
