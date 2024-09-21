export const getOnlyNumbers = (value: string) => {
  return value.replaceAll(/[() +-]/g, '');
};

export const transformPhoneToResponse = (
  phone: string,
  isEmployer: boolean
) => {
  const transformPhone = getOnlyNumbers(phone);

  if (!transformPhone.length) return '';

  if (isEmployer) {
    return `+7 (${transformPhone.slice(0, 4)}) ${transformPhone.slice(
      4,
      6
    )}-${transformPhone.slice(6, 8)}-${transformPhone.slice(8, 10)}`;
  } else {
    return `+7 (${transformPhone.slice(0, 3)}) ${transformPhone.slice(
      3,
      6
    )}-${transformPhone.slice(6, 8)}-${transformPhone.slice(8, 10)}`;
  }
};
