import apiLib from '../lib/api'
import userHelper, { User } from '../helpers/userHelper'

// type userRecord = Record<string, any>;
interface userUpdateEvent {
    success: boolean
    market: string
    newUsers?: User[]
    users: User[]
}
type replyEventListener = (event: userUpdateEvent) => void

const api = {
    /**
     * This will allow to install an function to be called when a new reply has happened
     */
    getUsersSolA: (eventListener: replyEventListener = () => undefined) => {
        let users: User[] = [];
        
        const addNewUsers = (newData: User[]) => {
            users = [
                ...users,
                ...newData,
            ]    
        }

        const dispatch = (success: boolean, market: string, newUsers: User[] = []) => {
            addNewUsers(newUsers)
            eventListener({
                success,
                market,
                newUsers,
                users
            });
        }

        apiLib.getUsUsers()
            .then(records => dispatch(true, 'US', records.map(user => userHelper.legacyConvertToUser(user))))
            .catch(() => dispatch(false, 'US'))

        apiLib.getDkUsers()
            .then(records => dispatch(true, 'DK', records.map(user => userHelper.convertToUser(user))))
            .catch(() => dispatch(false, 'DK'))

        apiLib.getFiUsers()
            .then(records => dispatch(true, 'FI', records.map(user => userHelper.convertToUser(user))))
            .catch(() => dispatch(false, 'FI'))

        apiLib.getNoUsers()
            .then(records => dispatch(true, 'NO', records.map(user => userHelper.convertToUser(user))))
            .catch(() => dispatch(false, 'NO'))
    },

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
