import axios from "axios";

// export const API_URL = 'http://localhost:8000'
export const API_URL = 'https://naimur.pythonanywhere.com'

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json"
    }
});


export default class ApiService {
    static saveStripeInfo(data = {}) {
        return api.post(`${API_URL}/payment/save-stripe-info/`, data)
    }
}