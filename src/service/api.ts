import apiLib from '../lib/api'

const api = {
    getUsers: async () => {
        return apiLib.getUsUsers();
    },
    getUser: async (id: string) => {

    },
}

export default api