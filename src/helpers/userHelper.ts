import { differenceInYears } from 'date-fns'

type Tier = 'BRONZE' | 'SILVER' | 'GOLD'

const getTier = (user: any): Tier => {
  const years = differenceInYears(new Date(), new Date(user.registered.date))

  if (years >= 10) {
    return 'GOLD'
  } else if (years >= 5) {
    return 'SILVER'
  }

  return 'BRONZE'
}

const user = {
  getTier,
}

export default user
