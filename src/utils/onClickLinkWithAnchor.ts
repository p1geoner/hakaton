import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { changeHashParams } from '@/hooks/useHash';

export const onClickLinkWithAnchor = (
  dependencies: TDependenciesAttributes,
  path: TPathAttributes
) => {
  const transformHash = path.newHash.replace('#', '');

  if (dependencies.pathname === path.newPathname) {
    if (dependencies.hash === transformHash)
      dependencies.setHash(transformHash, { reloadPrevIdenticalHash: true });
    else dependencies.setHash(transformHash);
  } else dependencies.router.push(`${path.newPathname}#${transformHash}`);
};

type TDependenciesAttributes = {
  hash: string;
  setHash: (newHash: string | null, params?: changeHashParams) => void;
  pathname: string;
  router: AppRouterInstance;
};

export type TPathAttributes = {
  newPathname: string;
  newHash: string;
};
