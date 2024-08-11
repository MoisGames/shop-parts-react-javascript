import axios from 'axios'


const $host = axios.create({ // Запросы не требущие авторизации
    baseURL: process.env.REACT_APP_API_URL
})

export {$host}