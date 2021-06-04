/**
 * The candidate may change this file contents
 */
 export interface User {
  login: {
    uuid: string
    id: string
    username: string
  }
  name: {
    first: string
    last: string
    title: string
  }
  location: {
    street:{
      number: number
      name: string
    }
    city: string
    state: string
    country: string
  }
  birth: {
    age: number
  }
  registered: {
    age: number
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nationality: string
  phone: string
}

type Tier = 'BRONZE' | 'SILVER' | 'GOLD'

const getTier = (user: User): Tier => {
  const amountOfYearsRegistered = user.registered.age
  return amountOfYearsRegistered < 5 ? "BRONZE"
        : amountOfYearsRegistered < 10 ? "SILVER"
        : "GOLD"
}

const user = {
  getTier,
}

export default user
