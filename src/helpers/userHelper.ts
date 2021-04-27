import { differenceInYears } from 'date-fns'

interface SharedUserDetails {
  cell: string
  email: string
  id: string
  name: {
    first: string
    last: string
    title: string
  }
  phone: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  registrationDate: string
  userName: string
}

export interface User extends SharedUserDetails {
  gender: string

  market: string
}

const sharedUserDetails = (user: any): SharedUserDetails => {
  return {
    cell: user.cell,
    email: user.email,
    id: user.login.uuid ? user.login.uuid : user.login.id,
    name: user.name,
    phone: user.phone,
    picture: user.picture,
    registrationDate: user.registered.date,
    userName: user.login.username,
  }
}

const convertToUser = (user: any): User => {
  return {
    ...sharedUserDetails(user),
    gender: user.gender,
    market: user.nat,
  }
}

const legacyConvertToUser = (user: any): User => {
  return {
    ...sharedUserDetails(user),
    gender: user.gender === 'M' ? 'male' : 'female',
    market: user.nationality,
  }
}

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

const user = {
  getTier,
  convertToUser,
  legacyConvertToUser
}

export default user
