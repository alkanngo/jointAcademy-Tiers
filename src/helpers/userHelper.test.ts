import userHelper from './userHelper'

test('tiers', () => {
  // TODO: Mock Date
  expect(userHelper.getTier({ registered: { date: '2006-07-05T13:10:42.010Z' }})).toEqual('GOLD')
});
