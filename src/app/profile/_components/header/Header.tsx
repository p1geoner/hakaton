import Cookies from 'js-cookie';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';

import { Button, ButtonVariant } from '@/components/new-ui-kit';

import { useStore } from '@/hooks/useStore';

import { TUser } from '@/types/entities/IUser';

import IcCup from '@/assets/new-icons/general/ic_cup.svg';
import IcStart from '@/assets/new-icons/general/ic_star.svg';

import styles from './styles.module.scss';

export const Header = observer(({ user }: { user: TUser }) => {
  const store = useStore();

  const router = useRouter();

  const onClick = () => {
    router.push('/login');
    store.auth.logout();
    Cookies.remove('auth_token');
  };
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h2>{user.username}</h2>
          <h4>Обучается с {user.start_study_date}</h4>
        </div>
        <Button onClick={() => onClick()} variant={ButtonVariant.INLINE}>
          Выйти
        </Button>
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
          До следующего ранга {user.experience_for_next_rank} <IcStart />
        </div>
      </div>
    </div>
  );
});
