import { differenceInYears } from 'date-fns'

type Tier = 'BRONZE' | 'SILVER' | 'GOLD'

const getTier = (user: User): Tier => {
  const years = differenceInYears(new Date(), new Date(user.registrationDate))

  if (years >= 10) {
    return 'GOLD'
  } else if (years >= 5) {
    return 'SILVER'
  }

  return 'BRONZE'
}

export interface User {
  firstName: string
  gender: string
  id: number
  lastName: string
  market: string
  registrationDate: string
  userName: string
}

const dkUserToUser = (dkUser: any): User => {
  return {
    firstName: dkUser.name.first,
    gender: dkUser.gender === 'male' ? 'M' : 'F',
    id: dkUser.login.uuid,
    lastName: dkUser.name.last,
    market: dkUser.nat,
    registrationDate: dkUser.registered.date,
    userName: dkUser.login.username
  }
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

const noUserToUser = (noUser: any): User => {
  return {
    firstName: noUser.name.first,
    gender: noUser.gender === 'male' ? 'M' : 'F',
    id: noUser.login.uuid,
    lastName: noUser.name.last,
    market: noUser.nat,
    registrationDate: noUser.registered.date,
    userName: noUser.login.username
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
  getTier,
  dkUserToUser,
  fiUserToUser,
  noUserToUser,
  usUserToUser
}

export default user
