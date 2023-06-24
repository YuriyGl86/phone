import checkPhoneNumber from '../app';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['999999999999999999999', 'некорректный номер'],
])(
  ('shoud return correct number from %s'),
  (number, correctNumber) => {
    // const validator = new Validator();
    expect(checkPhoneNumber(number)).toBe(correctNumber);
  },
);
