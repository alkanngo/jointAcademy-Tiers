import apiLib from '../lib/api'

const api = {
    getUsers: async () => {
        return apiLib.getUsUsers();
    }
}

export default api