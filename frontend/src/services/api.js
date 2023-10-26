import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL // Base URL for API requests
});

const apiService = {
    getCountry: (countryName) => {
        return api.get(`/country/${countryName}`)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }
};


export { apiService };





