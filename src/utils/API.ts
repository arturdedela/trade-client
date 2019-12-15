import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { provide } from './IoC';
import bind from "../shared/decorators/bind";

@provide.singleton()
export class API {
  private readonly client = axios.create({
    baseURL: "http://localhost:3000",
  });

  public setAuthToken(jwtToken: string) {
    this.client.defaults.headers = {
      'Authorization': 'Bearer ' + jwtToken,
    };
  }

  @bind
  private onSuccess(response: AxiosResponse) {
    const { url } = response.config;

    console.debug(`Request Successful! (${url})`, response);

    return response.data;
  }

  @bind
  private onError(error: AxiosError): Promise<AxiosResponse | string>  {
    const { url } = error.config;

    console.error(`Request Failed (${url}):`, error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }


    return Promise.reject(error.response || error.message);
  }

  public async request(options: AxiosRequestConfig) {

    return this.client(options)
      .then(this.onSuccess)
      .catch(this.onError);
  }

  public async get<ResponseType = any>(path: string, options?: AxiosRequestConfig): Promise<ResponseType> {
    return this.request({ method: 'GET', url: path, ...options });
  }

  public async post<PayloadType = any, ResponseType = any>(path: string, payload?: PayloadType, options?: AxiosRequestConfig):
    Promise<ResponseType>
  {
    return this.request({ method: 'POST', url: path, data: payload, ...options });
  }

  public async put<PayloadType = any, ResponseType = any>(path: string, payload?: PayloadType, options?: AxiosRequestConfig):
    Promise<ResponseType>
  {
    return this.request({ method: 'PUT', url: path, data: payload, ...options });
  }

  public async delete<ResponseType = any, PayloadType = any>(path: string, payload?: PayloadType, options?: AxiosRequestConfig):
    Promise<ResponseType>
  {
    return this.request({ method: 'DELETE', url: path, data: payload, ...options });
  }
}
