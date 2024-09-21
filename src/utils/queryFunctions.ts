// @ts-nocheck
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { setSearchParams } from '@/utils/setSearchParams';

import { staticLinks } from '@/config/routingLinks';

export const useParams = () => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const setParams = (name: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set(name, value);
    if (pathname === staticLinks.developmentIslands) {
      setSearchParams(pathname, newParams.toString(), 'education');
    } else {
      setSearchParams(pathname, newParams.toString());
    }
  };

  const deleteParams = (name: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.delete(name);
    if (pathname === staticLinks.developmentIslands) {
      setSearchParams(pathname, newParams.toString(), 'education');
    } else {
      setSearchParams(pathname, newParams.toString());
    }
  };

  const appendParams = (name: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.append(name, value);
    if (pathname === staticLinks.developmentIslands) {
      setSearchParams(pathname, newParams.toString(), 'education');
    } else {
      setSearchParams(pathname, newParams.toString());
    }
  };

  return { setParams, appendParams, deleteParams };
};
