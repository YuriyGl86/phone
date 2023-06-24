// TODO: write your code here

export default function checkPhoneNumber(number) {
  const cleanNumber = number.replace(/\D/g, '');
  if (cleanNumber.match(/^86\d{10}/)) {
    return `+${cleanNumber}`;
  }
  const correctRussian = cleanNumber.replace(/^8/, '7');
  const match = correctRussian.match(/^7\d{10}/);
  if (match) {
    return `+${correctRussian}`;
  }
  return 'некорректный номер';
}
