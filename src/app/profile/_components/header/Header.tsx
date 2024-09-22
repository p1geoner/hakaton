import { observer } from 'mobx-react-lite';

import { ButtonVariant, LinkBtn } from '@/components/new-ui-kit';

import { TUser } from '@/types/entities/IUser';

import IcEdit from '@/assets/icons/forms/IcEdit';

import styles from './styles.module.scss';

export const Header = observer(({ user }: { user: TUser }) => {
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h2>{user.username}</h2>
          <h4>Обучается с 21.09.2024</h4>
        </div>
        <LinkBtn
          href={'/'}
          variant={ButtonVariant.INLINE}
          icon={{ type: 'fill', icon: <IcEdit /> }}
        >
          Редактировать профиль
        </LinkBtn>
      </div>
      <div className={styles.chips}></div>
    </div>
  );
});
