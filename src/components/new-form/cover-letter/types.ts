import { ComponentProps } from 'react';

import { Button } from '@/components/new-ui-kit';

type btnSizes = ComponentProps<typeof Button>;
type TApiTypes =
  | 'applicantCreate'
  | 'vacancyCreate'
  | 'applicantUpdate'
  | 'vacancyUpdate';
export type TResponseStates =
  | 'hidden'
  | 'opened'
  | 'sended'
  | 'responded'
  | 'forbidden';

export type CoverLetterProps = {
  itemId: number;
  isReject?: boolean;
  apiType: TApiTypes;
  responseState: TResponseStates;
  response: (coverLetter: string) => object;

  mattermostUserId?: string | null;

  className?: string;
  btnClassName?: string;
  btnSize?: btnSizes;
  setResponseState: (state: TResponseStates) => void;
};
