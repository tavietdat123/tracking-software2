import axios from "axios";
import { API_URL } from "../config/api";
const api = axios.create({
    baseURL: API_URL,
});
const apiService = async (
    method = 'post',
    apiEndPoint: string,
    body: object | File,
    messErr: string = '',
    isFormData = false


) => {
    try {
        const config = {
        };
        if (isFormData) {
            (config as any)['headers'] = {
                'Content-Type': 'multipart/form-data',
            }
        }
        console.log(config)
        let response;
        switch (method.toLowerCase()) {
            case 'post':
                response = await api.post(apiEndPoint, body, config);
                break;
            case 'put':
                response = await api.put(apiEndPoint, body, config);
                break;
            case 'delete':
                response = await api.delete(apiEndPoint, config);
                break;
            case 'get':
                response = await api.get(apiEndPoint, config);
                break;
            default:
                throw new Error(`Invalid HTTP method: ${method}`);
        }

        if (response.status === 200 || response.status === 201) {
            return response.data;
        }
        if (messErr) {
            throw Error(messErr);
        }
    } catch (error) {
        throw error;
    }
};
export default apiService
