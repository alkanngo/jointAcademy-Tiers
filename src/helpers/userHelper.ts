import { differenceInYears } from 'date-fns'
import { User } from '../service/user'

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
}

export default user
