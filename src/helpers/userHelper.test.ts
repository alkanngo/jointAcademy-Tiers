import userHelper, { User } from './userHelper'

const testUser: User = {
  cell: '',
  email: '',
  gender: '',
  id: '',
  market: '',
  name: {
    first: '',
    last: '',
    title: '',
  },
  phone: '',
  picture: {
    large:  '',
    medium:  '',
    thumbnail:  '',
  },
  registrationDate: '',
  userName: '',
}

describe("tiers", () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2021, 4, 27));
  });
  
  afterAll(() => {
    jest.useRealTimers();
  });

  test('gold', () => {
    expect(userHelper.getTier({ ...testUser, registrationDate: '2006-07-05T13:10:42.010Z' })).toEqual('GOLD')
  })

  test('silver', () => {
    expect(userHelper.getTier({ ...testUser, registrationDate: '2015-07-05T13:10:42.010Z' })).toEqual('SILVER')
  })

  test('bronze', () => {
    expect(userHelper.getTier({ ...testUser, registrationDate: '2019-07-05T13:10:42.010Z' })).toEqual('BRONZE')
  })
})
