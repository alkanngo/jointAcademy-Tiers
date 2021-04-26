import apiLib from '../lib/api'
import userHelper from '../helpers/userHelper'

const api = {
    getUsers: async () => {
      return Promise.all([
        apiLib.getDkUsers(),
        apiLib.getFiUsers(),
        apiLib.getNoUsers(),
        apiLib.getUsUsers(),
      ]).then(users => {
        return [
          ...users[0].map(user => userHelper.dkUserToUser(user)),
          ...users[1].map(user => userHelper.fiUserToUser(user)),
          ...users[2].map(user => userHelper.noUserToUser(user)),
          ...users[3].map(user => userHelper.usUserToUser(user)),
        ]
      })
    },
    getUser: async (id: string) => {

    },
}

export default api
