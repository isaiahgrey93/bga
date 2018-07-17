export const formatDecimal = (amount = '') => {
  const [int = '0', decimal = '.00', ] = amount.split('.');

  let value = `${int}.`;

  if (decimal.length === 2) {
    value += decimal;
  } else if (decimal.length === 1) {
    value += `${decimal}0`;
  } else {
    value += '00';
  }

  return value;
};
