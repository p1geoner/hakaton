import { observer } from 'mobx-react-lite';

import { ButtonVariant, LinkBtn } from '@/components/new-ui-kit';

import { TUser } from '@/types/entities/IUser';

import IcEdit from '@/assets/icons/forms/IcEdit';
import IcCup from '@/assets/new-icons/general/ic_cup.svg';
import IcStart from '@/assets/new-icons/general/ic_star.svg';

import styles from './styles.module.scss';

export const Header = observer(({ user }: { user: TUser }) => {
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h2>{user.username}</h2>
          <h4>Обучается с {user.start_study_date}</h4>
        </div>
        <LinkBtn
          href={'/'}
          variant={ButtonVariant.INLINE}
          icon={{ type: 'fill', icon: <IcEdit /> }}
        >
          Редактировать профиль
        </LinkBtn>
      </div>
      <div className={styles.chips}>
        <div className={styles.white}>
          Ранг {user.rank.title}
          <IcCup />
        </div>
        <div className={styles.white}>
          Количество опыта {user.experience} <IcStart />
        </div>
        <div className={styles.grey}>
          До следующего ранга {user.experience} <IcStart />
        </div>
      </div>
    </div>
  );
});
