export interface User {
  firstName: string
  gender: string
  id: number
  lastName: string
  market: string
  registrationDate: string
  userName: string
}

const fiUserToUser = (fiUser: any): User => {
  return {
    firstName: fiUser.name.first,
    gender: fiUser.gender === 'male' ? 'M' : 'F',
    id: fiUser.login.uuid,
    lastName: fiUser.name.last,
    market: fiUser.nat,
    registrationDate: fiUser.registered.date,
    userName: fiUser.login.username
  }
}

const usUserToUser = (usUser: any): User => {
  return {
    firstName: usUser.name.first,
    gender: usUser.gender,
    id: usUser.login.id,
    lastName: usUser.name.last,
    market: usUser.netionality,
    registrationDate: usUser.registered.date,
    userName: usUser.login.username
  }
}

const user = {
  fiUserToUser,
  usUserToUser
}

export default user 
