const digitRegex = /\d/g;

const addThousandSeperators = value =>
  value
    .reverse()
    .map((part, idx) => (idx > 1 && idx % 3 === 0 ? `${part},` : part))
    .reverse()
    .join('');

const addDecimalSeperator = (value, hasDecimal) => {
  const seperator = hasDecimal ? '.' : '';
  const decimal = value.filter(d => d !== '.').join('');

  return `${seperator}${decimal}`;
};

const addLeadingZero = (integer, decimal) =>
  (integer === '' && decimal.charAt(0) === '.' ? '0' : '');

const stripExtraneousDecimalValues = decimal => decimal.slice(0, 3);

const parseAmount = (amount) => {
  const value = amount.split('.');
  const decimalParts = value.slice(1);
  const integerPart = value.slice(0, 1);

  let integer = integerPart.join('').match(digitRegex) || [];
  integer = addThousandSeperators(integer);

  let decimal = decimalParts.join('').match(digitRegex) || [];
  decimal = addDecimalSeperator(decimal, decimalParts.length);
  decimal = stripExtraneousDecimalValues(decimal);

  const leadingZero = addLeadingZero(integer, decimal);

  return `${leadingZero}${integer}${decimal}`;
};

export default parseAmount;
