/**
 * VERY IMPORTANT!!!!
 * The candidate can only implement API methods logic and/or add support functions/methods
 * The API implements the ServiceApi interface and it should remain as it is
 */
import apiLib from '../lib/api'
import { User } from './user'
import { ServiceApi, GetUsersOptions, GetUsersOutput } from './api.types'

const api: ServiceApi = {
    getUsers: (options?: GetUsersOptions): GetUsersOutput => {
        // START - CANDIDATE getUsers IMPLEMENTATION
        return { result: apiLib.getUsUsers() as Promise<User[]> };
        // END - CANDIDATE getUsers IMPLEMENTATION
    },

    getUser: async (id: string): Promise<User> => {

        // TODO: PROVIDE USER INFORMATION
        return new Promise((resolve) => resolve({} as User))

    },
}

export default api
