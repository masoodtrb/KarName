import { toast } from 'react-toastify';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { isBrowser } from '@/libs/helpers';
import { axiosAgent } from './agent';

/**
 * @template T => Final Data (Result)
 * @template B => Request Body (Body)
 */
export const sendRequest = async <T = unknown, B = Record<string, unknown>>({
  method = 'get',
  body,
  url,
  config,
  ...props
}: IRequest<B>): Promise<IResult<T>> => {
  let response: AxiosResponse<IResponse<T>>;
  try {
    const configParams: AxiosRequestConfig = {
      ...config,
      ...props,
    };
    switch (method) {
      case 'post':
      case 'patch':
      case 'put':
        response = await axiosAgent[method](url, body, configParams);
        break;
      case 'delete':
        response = await axiosAgent.delete(url, {
          data: body,
          ...configParams,
        });
        break;
      case 'get':
      default:
        response = await axiosAgent.get(url, configParams);
        break;
    }
    const isSuccess = response.status >= 200 && response.status < 400;
    if (isSuccess) {
      return {
        success: isSuccess,
        errorType: null,
        data: response.data.data as unknown as T,
        message: response.data.message,
      };
    }
    throw {
      success: isSuccess,
      errorType: 'server',
      data: response as unknown as T,
      message: response.data.message || 'Default Error Message',
    };
  } catch (err) {
    const error = err as AxiosError<IErrorResponse>;
    if (isBrowser()) {
      console.error('Error', error.message);

      if (error.response?.data) {
        toast.error(`Error: ${error.response?.data.message}`);
      } else {
        toast.error(`Error: ${error.message}`);
      }
    }
    throw {
      success: false,
      errorType: 'client',
      data: error.response || null,
    };
  }
};
