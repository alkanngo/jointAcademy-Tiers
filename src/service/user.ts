export interface User {
  login: {
    uuid: string
  },
  name: {
    first: string
    last: string
    title: string
  }
  nationality: string
}

type Tier = 'BRONZE' | 'SILVER' | 'GOLD'

const getTier = (user: User): Tier => {
  return 'BRONZE'
}

const user = {
  getTier,
}

export default user
