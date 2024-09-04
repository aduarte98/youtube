import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:4000',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    } // 6:55 faltando
})

export default api;