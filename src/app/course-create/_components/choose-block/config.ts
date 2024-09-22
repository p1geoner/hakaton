export type TTypeField = 'TextBlock' | 'ImageBlock' | 'DividerBlock';

export type TAllTypesField =
  | 'TEXT'
  | 'CODE'
  | 'HEADERTEXT'
  | 'QUOTETEXT'
  | 'ImageBlock'
  | 'DividerBlock';

export type TTypeTextField = 'TEXT' | 'CODE' | 'HEADERTEXT' | 'QUOTETEXT';

export const typesField = [
  { id: 'TEXT', title: 'Блок с текстом' },
  { id: 'CODE', title: 'Блок с кодом' },
  { id: 'HEADERTEXT', title: 'Заголовок' },
  { id: 'QUOTETEXT', title: 'Блок с пояснением' },
  { id: 'ImageBlock', title: 'Изображение' },
  { id: 'DividerBlock', title: 'Разделительная черта' },
];
