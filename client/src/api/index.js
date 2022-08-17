import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchItem = (id) => API.get(`/items/${id}`);
export const fetchItems = (page) => API.get(`/items?page=${page}`);
export const fetchItemsBySearch = (searchQuery) => API.get(`/items/search?searchQuery=${searchQuery.search}`);
export const createItem = (newItem) => API.post('/items', newItem);
export const updateItem = (id, updatedItem) => API.patch(`/items/${id}`, updatedItem);
export const deleteItem = (id) => API.delete(`/items/${id}`);
export const likeItem = (id) => API.patch(`/items/${id}/likeItem`);
export const commentItem = (value, id) => API.post(`/items/${id}/commentItem`, { value });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);