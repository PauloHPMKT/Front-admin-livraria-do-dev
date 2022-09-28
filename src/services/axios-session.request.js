import { http } from './http'

export default {
  listSessions: () => {
    return http.get('/session')
  },
}