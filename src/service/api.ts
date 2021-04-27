import apiLib from '../lib/api'
import user,{ User } from './user'

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
            .then(records => dispatch(true, 'US', records.map(usUser => user.usUserToUser(usUser))))
            .catch(() => dispatch(false, 'US'))

        apiLib.getFiUsers()
            .then(records => dispatch(true, 'FI', records.map(fiUser => user.fiUserToUser(fiUser))))
            .catch(() => dispatch(false, 'FI'))
    },

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
