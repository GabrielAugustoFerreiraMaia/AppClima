import axios from 'axios';

//https://api.hgbrasil.com/weather?key=ae381b80&lat=-23.682&lon=-46.875

export const key ='ae381b80';

const api=axios.create({
    baseURL:'https://api.hgbrasil.com'
});

export default api;