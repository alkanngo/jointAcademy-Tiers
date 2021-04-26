export interface User {
  firstName: string
  gender: string
  id: number
  lastName: string
  market: string
  registrationDate: string
  userName: string
}

const dkUserToUser = (user: any): User => {
  return {
    firstName: user.name.first,
    gender: user.gender === 'male' ? 'M' : 'F',
    id: user.login.uuid,
    lastName: user.name.last,
    market: user.nat,
    registrationDate: user.registered.date,
    userName: user.login.username
  }
}
 
const fiUserToUser = (user: any): User => {
  return {
    firstName: user.name.first,
    gender: user.gender === 'male' ? 'M' : 'F',
    id: user.login.uuid,
    lastName: user.name.last,
    market: user.nat,
    registrationDate: user.registered.date,
    userName: user.login.username
  }
}

const noUserToUser = (user: any): User => {
  return {
    firstName: user.name.first,
    gender: user.gender === 'male' ? 'M' : 'F',
    id: user.login.uuid,
    lastName: user.name.last,
    market: user.nat,
    registrationDate: user.registered.date,
    userName: user.login.username
  }
}

const usUserToUser = (user: any): User => {
  return {
    firstName: user.name.first,
    gender: user.gender,
    id: user.login.id,
    lastName: user.name.last,
    market: user.netionality,
    registrationDate: user.registered.date,
    userName: user.login.username
  }
}

const user = {
  dkUserToUser,
  fiUserToUser,
  noUserToUser,
  usUserToUser
}

export default user 
