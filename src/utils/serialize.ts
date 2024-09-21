export const snakeCaseToCamelCase = (input: string) =>
  input
    .split('_')
    .reduce(
      (res: string, word: string, i: number) =>
        i === 0
          ? word.toLowerCase()
          : `${res}${word.charAt(0).toUpperCase()}${word
              .substring(1)
              .toLowerCase()}`,
      ''
    );

export function serialize<T, J>(obj: T): J {
  const serializeObj = {};

  for (const key in obj) {
    let value = obj[key];

    if (Array.isArray(value)) {
      // @ts-ignore
      value = value.map((item) =>
        ['string', 'number', 'boolean'].includes(typeof item)
          ? item
          : serialize(item)
      );
    } else if (value instanceof Object) {
      value = serialize(value);
    }

    // @ts-ignore
    serializeObj[snakeCaseToCamelCase(key)] = value;
  }

  return serializeObj as J;
}
