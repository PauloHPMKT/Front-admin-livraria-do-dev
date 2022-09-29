import { http } from './http'

export default {
  listar: () => {
    return http.get('/usuarios') 
  },

  create: (data) => {
    return http.post('/usuarios', data)
  },

  login: (data) => {
    return http.post('/usuariosauth', data) 
  },

  update: (data, id) => {
    console.log(data, id, 'axios')
    return http.patch(`/usuarios/${id}`, data)
  },

  remove: (id) => {
    return http.delete(`/usuarios/${id}`)
  }
}