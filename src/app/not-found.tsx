import { Metadata } from 'next';

import { NotFoundWrapper } from '@/components/custom-pages';

export const metadata: Metadata = {
  title: 'Страница не найдена',
};

export default function NotFoundPage() {
  return <NotFoundWrapper />;
}
