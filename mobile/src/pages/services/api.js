import axios from 'axios'

/* baseURL: 'http://192.168.1.8:3333' */ 

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api