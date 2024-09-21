import { PageWrapper } from '@/components/new-layouts';
import { Loader } from '@/components/new-ui-kit';

import styles from './LoadingWrapper.module.scss';

const LoadingWrapper = () => {
  return (
    <PageWrapper mainStyles={styles.main}>
      <Loader />
    </PageWrapper>
  );
};

export default LoadingWrapper;
