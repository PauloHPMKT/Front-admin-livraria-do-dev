import { http } from './http'

export default {
  listar: () => {
    return http.get('/usuarios') 
  },

  login: (data) => {
    return http.post('/usuariosauth', data) 
  },

  remove: (id) => {
    return http.delete(`/usuarios/${id}`)
  }
}