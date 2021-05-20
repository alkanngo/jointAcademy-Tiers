/**
 * The candidate may change this file contents
 */
 export interface User {
  login: {
    uuid: string
    id: string 
  }
  name: {
    first: string
    last: string
    title: string
  }
  registered: {
    age: number
  }
  picture: {
    medium: string
    thumbnail: string
  }
  location:{
    country: string
  }
  nationality: string
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
