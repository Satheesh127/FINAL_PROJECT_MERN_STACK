import axios from 'axios';

const API_URL = 'http://localhost:5000/api/properties';

export const getAllProperties = () => axios.get(API_URL);
export const getProperty = (id) => axios.get(`${API_URL}/${id}`);
export const createProperty = (data) => axios.post(API_URL, data);
export const updateProperty = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteProperty = (id) => axios.delete(`${API_URL}/${id}`);
export const searchProperties = (params) => axios.get(`${API_URL}/search/filter`, { params });
