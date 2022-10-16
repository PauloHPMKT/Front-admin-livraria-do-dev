import { http } from './http'

export default {
  listBooks: () => {
    return http.get('/books')
  },
}