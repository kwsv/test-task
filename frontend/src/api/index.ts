import axios from 'axios'

export const BASEDOMAIN = [process.env.BACKEND_DOMAIN, process.env.BACKEND_PORT].join(':')

export const apiInstanse = axios.create({
    baseURL: BASEDOMAIN,
})

