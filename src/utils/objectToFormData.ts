type Value = string | FileList | File | Blob | undefined | null;

type NestedRecord = { [k: string]: Value | NestedRecord | NestedRecord[] };

const buildFormData = (
  formData: FormData,
  data: NestedRecord | Value,
  parentKey?: string
) => {
  if (
    data &&
    typeof data === 'object' &&
    !(data instanceof Date) &&
    !(data instanceof File) &&
    !(data instanceof Blob)
  ) {
    Object.entries(data).forEach(([key, value]) => {
      // @ts-ignore
      buildFormData(formData, value, parentKey ? `${parentKey}[${key}]` : key);
    });
  } else if (parentKey) {
    const value = data == null ? '' : data;

    const clearDate = value instanceof Date ? value.toString() : value;

    // @ts-ignore
    formData.append(parentKey, clearDate);
  }
};

export const generateFormData = (object: NestedRecord, parentKey?: string) => {
  const formData = new FormData();

  buildFormData(formData, object, parentKey);

  return formData;
};
