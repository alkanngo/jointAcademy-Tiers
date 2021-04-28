import apiLib from '../lib/api'
import { User } from './user'
import { GetUsersOptions, GetUsersOutput } from './api.types'

const api = {
    getUsers: (options: GetUsersOptions): GetUsersOutput => {
        // START - CANDIDATE getUsers IMPLEMENTATION
        return { result: apiLib.getUsUsers() as Promise<User[]> };
        // END - CANDIDATE getUsers IMPLEMENTATION
    },

    getUser: async (id: string): Promise<User> => {

        // TODO: PROVIDE USER INFORMATION

    },
}

export default api
