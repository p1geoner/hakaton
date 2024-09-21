export const setSearchParams = (
  pathname: string,
  searchParams?: string,
  savePastHash: boolean = true
) => {
  if (typeof window !== 'undefined') {
    let url = '';

    if (
      window.location.host.includes('next') ||
      window.location.host.includes('navigator-career')
    ) {
      url = `${process.env.NEXT_PUBLIC_FRONT_URL_NEW}${pathname}`;
    } else {
      url = `${process.env.NEXT_PUBLIC_FRONT_URL}${pathname}`;
    }

    if (searchParams) url += `?${searchParams}`;
    if (savePastHash) url += window.location.hash;

    window.history.pushState(null, '', url);
  }
};
