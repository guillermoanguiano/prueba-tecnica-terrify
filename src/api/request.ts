import axios from 'axios';
import { setupInterceptorsTo } from './interceptors';

type Request = {
    method: string
    data?: any
    endpoint?: string
    filters?: string
    headers?: any
};

export const api = async (request: Request) => {
    try {
        const data = request.data ?? {};
        const filters = request.filters ? request.filters : '';
        const endpoint = request.endpoint || '';
        const url = process.env.API_URL + endpoint + filters;
        const headers = {
            'Content-Type': 'application/json',
            ...request.headers,
        };

        const options = {
            method: request.method,
            url,
            data,
            headers,
        };

        const apiInstance = setupInterceptorsTo(axios.create());
        const response = await apiInstance(options);
        return response.data;
    } catch (err) {
        return err;
    }
}