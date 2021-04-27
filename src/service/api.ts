import apiLib from '../lib/api'
import userHelper, { User } from '../helpers/userHelper'

const api = {
    getUsers: async () => {
      return Promise.all([
        apiLib.getDkUsers(),
        apiLib.getFiUsers(),
        apiLib.getNoUsers(),
        apiLib.getUsUsers(),
      ]).then(users => {
        return [
          ...users[0].map(user => userHelper.convertToUser(user)),
          ...users[1].map(user => userHelper.convertToUser(user)),
          ...users[2].map(user => userHelper.convertToUser(user)),
          ...users[3].map(user => userHelper.legacyConvertToUser(user)),
        ]
      }).then((allUsers: Array<User>) => {
        const sorted = allUsers.slice().sort((a, b) => a.id.localeCompare(b.id))

        return sorted.reduce((accumulator: Array<User>, current) => {
          if (accumulator.length === 0 || accumulator[accumulator.length - 1].id !== current.id) {
            accumulator.push(current)
          }

          return accumulator
        }, [])
      }) 
    },
    getUser: async (id: string) => {

    },
}

export default api
