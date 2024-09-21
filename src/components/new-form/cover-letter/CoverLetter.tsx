'use client';

import clsx from 'clsx';
import { FC, useState } from 'react';

import {
  Button,
  ButtonTheme,
  Popover,
  TextArea,
} from '@/components/new-ui-kit';

import { useStore } from '@/hooks/useStore';

import { IAccountStore } from '@/types/stores/IAccountStore';
import { IApplicantStore } from '@/types/stores/IApplicantStore';
import { IEmployerStore } from '@/types/stores/IEmployerStore';

import { ResponsesService } from '@/API';

import { CoverLetterProps } from './types';

import IcClose from '@/assets/icons/general/ic_close.svg';

import styles from './CoverLetter.module.scss';

export const CoverLetter: FC<CoverLetterProps> = ({
  itemId,
  response,
  mattermostUserId,
  apiType,
  isReject = false,
  className = '',
  btnClassName = '',
  responseState,
  setResponseState,
}) => {
  const store = useStore();
  const account = store.account as IAccountStore;
  const user =
    account.applicantStore ||
    (account.employerStore as IApplicantStore | IEmployerStore);
  const [refSendButton, setRefSendButton] = useState<any>();
  const [showForbiddenMessage, setShowForbiddenMessage] = useState(false);

  const isOpenedLetter = responseState === 'opened';
  const isSendedLetter =
    responseState === 'sended' || responseState === 'responded';

  const defaultText =
    apiType === 'vacancyCreate'
      ? `Здравствуйте! Меня заинтересовала ваша вакансия. Вы можете связаться со мной по телефону: ${
          user?.contacts?.phone ?? ''
        } или почте: ${user?.contacts?.email ?? ''}, ${
          user?.profile?.lastName ?? ''
        } ${user?.profile?.firstName ?? ''} ${
          user?.profile?.patronymicName ?? ''
        }`
      : apiType === 'applicantUpdate' && !isReject
      ? 'Здравствуйте. Мы свяжемся с вами в ближайшее время для обсуждения деталей.'
      : apiType === 'applicantUpdate' && isReject
      ? 'Здравствуйте, благодарим за проявленный интерес! К сожалению, сейчас мы не готовы пригласить вас на дальнейшее собеседование. Ваша кандидатура будет рассмотрена повторно в случае возникновения такой необходимости.'
      : apiType === 'vacancyUpdate' && !isReject
      ? `Здравствуйте. Можем связаться по телефону: ${user?.contacts?.phone} или почте: ${user?.contacts?.email}`
      : 'Здравствуйте, спасибо за приглашение! К сожалению, сейчас я не готов принять ваше предложение. Я повторно рассмотрю вашу вакансию в случае возникновения такой необходимости.';

  const [coverLetter, setCoverLetter] = useState(defaultText);

  const letterContainerStyles = clsx({
    [styles.letterContainer]: true,
    [styles.letterContainerOpened]: responseState === 'opened',
    [className]: className,
  });

  const btnStyles = clsx({
    [styles.respond]: true,
    [btnClassName]: btnClassName,
  });

  const isDefaultResponseState = responseState === 'hidden' && !isReject;
  const canRespond = isDefaultResponseState || responseState === 'forbidden';
  const isRejectState = isReject && responseState === 'hidden';

  const btnResponseText = canRespond
    ? 'Откликнуться'
    : isRejectState
    ? 'Отклонить'
    : responseState === 'opened'
    ? 'Отправить'
    : 'Отправлено';

  const cancelButtonClick = () => {
    setResponseState('hidden');
  };

  const sendButtonOnClick = async () => {
    if (responseState === 'forbidden') {
      return setShowForbiddenMessage((prevState) => !prevState);
    }

    if (responseState === 'hidden') {
      return setResponseState('opened');
    }

    setResponseState('sended');

    switch (apiType) {
      case 'vacancyCreate': {
        ResponsesService.createResponseOnVacancy(response(coverLetter), itemId);
        break;
      }
      case 'vacancyUpdate': {
        ResponsesService.updateResponseOnVacancy(response(coverLetter), itemId);
        break;
      }
      case 'applicantCreate': {
        ResponsesService.createResponseOnResume(response(coverLetter), itemId);
        break;
      }
      case 'applicantUpdate': {
        ResponsesService.updateResponseOnResume(response(coverLetter), itemId);
        break;
      }
    }
  };

  return (
    <div className={letterContainerStyles}>
      {responseState === 'opened' && (
        <div className={styles.letter}>
          <span>Сопроводительное письмо</span>
          <TextArea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
          />
        </div>
      )}

      <div className={styles.btns}>
        <div ref={setRefSendButton}>
          <Button
            theme={
              isSendedLetter
                ? ButtonTheme.BLUE_OUTLINE
                : isReject
                ? ButtonTheme.DANGER
                : ButtonTheme.BLUE
            }
            className={btnStyles}
            onClick={sendButtonOnClick}
            disabled={isSendedLetter}
          >
            {btnResponseText}
          </Button>
        </div>

        {isOpenedLetter && (
          <Button
            className={btnStyles}
            onClick={cancelButtonClick}
            theme={ButtonTheme.WHITE_OUTLINE}
          >
            Отмена11
          </Button>
        )}
      </div>

      {showForbiddenMessage && (
        <Popover
          isOpen={showForbiddenMessage}
          refEl={refSendButton}
          onClose={() => setShowForbiddenMessage(false)}
          offset={[0, 10]}
        >
          <div className={styles.moderate}>
            <h6>Проверка</h6>
            <IcClose
              className={styles.close}
              onClick={() => setShowForbiddenMessage(false)}
            />
            <span>Ваша анкета на модерации</span>
          </div>
        </Popover>
      )}
    </div>
  );
};
