import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api';

export function getItems(){
    return axios.get(`${API_URL}/items`);
}

export function getCategories(){
    return axios.get(`${API_URL}/categories`);
}

export function getParentCategories(){
    return axios.get(`${API_URL}/parent-categories`);
}