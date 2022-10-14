import axios from 'axios'

const storageToken = localStorage.getItem('token')

export const http = axios.create({
  baseURL: `http://localhost:3005/api`,
  headers: {
    Authorization: `Bearer ${storageToken}`
  }
})

/*http.interceptors.request.use(async config => {
  try {
    await storageToken

    if (storageToken) {
      config.headers.Authorization = `Bearer ${storageToken}`
    }

    return config
  } catch (error) {
    console.error(error)
  }
})*/