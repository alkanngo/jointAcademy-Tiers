import apiLib from '../lib/api'
import { User } from '../helpers/userHelper'

const api = {
  getUsers: async (): Promise<Array<User>> => {
    return apiLib.getUsUsers() as Promise<Array<User>>;
  },
  //getUser: async (id: string): Promise<User> => {
  //},
}

export default api
