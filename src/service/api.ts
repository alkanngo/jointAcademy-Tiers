import apiLib from '../lib/api'
import { User } from './user'

const api = {
  getUsers: async (): Promise<Array<User>> => {
    return apiLib.getUsUsers() as Promise<Array<User>>;
  },
  //getUser: async (id: string): Promise<User> => {
  //},
}

export default api
