import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from './instance';
import Vue from 'vue';

const vm: any = new Vue();
export default class HttpClient {

    private loading: any;

    public constructor(private resource: string) {

    }
    
    private get defaultConfig(): AxiosRequestConfig {
        return {
          headers: {
            'Content-Type': 'application/json',
          },
        };
      }

    public get(
        action: string = '',
        params: any = null,
        config: AxiosRequestConfig = this.defaultConfig,
      ): Promise<AxiosResponse<any>> {
        return axios
          .get(
            `${this.resource}/${action}`,
            config,
          );
      }

      public post(
        action: string = '',
        body: any,
        config: AxiosRequestConfig = this.defaultConfig,
      ): Promise<AxiosResponse<any>> {
        return axios
          .post(`${this.resource}/${action}`, body, config);
      }

      
    public put(
        action: string = '',
        body?: any | undefined,
        config: AxiosRequestConfig = this.defaultConfig,
    ): Promise<AxiosResponse<any>> {
        return axios
            .put(`${this.resource}/${action}`, body, config);
    }

    
}