import apiLib from '../lib/api'
import user from './user'

const api = {
    getUsers: async () => {
      const fiUsers = await apiLib.getFiUsers()
      const usUsers = await apiLib.getUsUsers()

      const users = [
        ...fiUsers.map(fiUser => user.fiUserToUser(fiUser)),
        ...usUsers.map(usUser => user.usUserToUser(usUser)),
      ]

      return users;
    },
    getUser: async (id: string) => {

    },
}

export default api
