const addPhoneMask = (phone: string) => {
  return (
    '+' +
    phone?.substring(0, 1) +
    ' (' +
    phone?.substring(1, 4) +
    ') ' +
    phone?.substring(4, 7) +
    '-' +
    phone?.substring(7, 9) +
    '-' +
    phone?.substring(9, 11)
  );
};

const removeNonAsciiSymbols = (text: string) => {
  return text;
};

export { removeNonAsciiSymbols, addPhoneMask };
