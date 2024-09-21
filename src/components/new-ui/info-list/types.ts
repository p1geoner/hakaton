import React from 'react';

export type TInfoListProps = {
  items: TInfoItem[];
  isShort?: boolean;
};

export type TInfoItem = {
  title: string;
  body: React.ReactNode;
};
