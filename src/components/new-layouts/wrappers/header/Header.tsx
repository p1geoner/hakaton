'use client';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';

import { ButtonTheme, ButtonVariant, LinkBtn } from '@/components/new-ui-kit';

import { useStore } from '@/hooks/useStore';

import { staticLinks } from '@/config/routingLinks';

import IcProfile from '@/assets/new-icons/general/ic_user.svg';

import styles from './styles.module.scss';

export const Header = observer(() => {
  const store = useStore();
  const authStore = store.auth;
  const router = useRouter();

  return (
    <header className={styles.header}>
      <h1 onClick={() => router.push(staticLinks.main)} className={styles.logo}>
        ProSkill <span>Academy</span>
      </h1>

      <div className={styles.navigation}>
        <LinkBtn
          theme={ButtonTheme.BLACK}
          variant={ButtonVariant.INLINE}
          href={staticLinks.categories}
        >
          Курсы
        </LinkBtn>
        <LinkBtn
          theme={ButtonTheme.BLACK}
          variant={ButtonVariant.INLINE}
          href={staticLinks.about}
        >
          О нас
        </LinkBtn>
        {authStore?.user?.groups[0] && (
          <LinkBtn
            theme={ButtonTheme.BLACK}
            variant={ButtonVariant.INLINE}
            href={staticLinks.createCourse}
          >
            Создание курса
          </LinkBtn>
        )}
      </div>

      {!authStore.isAuth ? (
        <LinkBtn
          variant={ButtonVariant.INLINE}
          icon={{ type: 'fill', icon: <IcProfile /> }}
          href={staticLinks.authorization}
        >
          Войти
        </LinkBtn>
      ) : (
        <LinkBtn
          variant={ButtonVariant.INLINE}
          icon={{ type: 'fill', icon: <IcProfile /> }}
          href={staticLinks.profile}
        >
          Профиль
        </LinkBtn>
      )}
    </header>
  );
});
