export const config = {
  matcher: [
    // general
    '/',
    '/glavnaya-rabotodatelya',
    '/korporativnyi-standart',
    '/politika-konfidencialnosti',
    '/vakansii',
    '/rezume',
    '/kompanii',
    '/investicii',
    '/vakansiya/:id',
    '/soiskatel/:id',
    '/moi-profil',
    '/kursi',
    '/kurs/:id',
    '/vneshnie-vakansii',
    '/o-nas',
    '/not-found',
    '/ostrova-karery',
    '/kompaniya/:id',
    '/korporatsiya',
    '/praktika-studentov',
    '/zayavka',
    '/zayavka-karery',
    '/SOPD',
    '/ostrova-razvitiya',
    '/professii',
    '/tekhnicheskie-raboty',
    '/kalendar-sobytij',

    // unauthorized
    '/registraciya',
    '/avtorizaciya',
    '/zabyli-parol',

    // authorized
    '/izbrannoe',
    '/izmenenie-parolya',
    '/nastrojka-uvedomlenij',

    // employer
    '/redaktirovanie-kompanii',
    '/sozdanie-vakansii',
    '/redaktirovanie-vakansii/:id',
    '/sozdanie-kursa',
    '/redaktirovanie-kursa/:id',
    '/otkliki-kandidatov/:id',
    '/redaktirovanie-investicii',
    '/redaktirovanie-shablonov-otveta',

    // applicant
    '/vk-registraciya',
    '/redaktirovanie-profilya',
    '/sozdanie-rezume',
    '/otkliki-i-predlozheniya',
    '/redaktirovanie-rezume',
    '/redaktirovanie-opita-raboti',
    '/redaktirovanie-portfolio',
    '/redaktirovanie-praktiki',
    '/redaktirovanie-obrazovaniya',
    '/redaktirovanie-sobytij',
    '/redaktirovanie-publikacij',
    '/redaktirovanie-kursi',
    '/kartochka-zaprosa',
    '/sfera-deyatelnosti/:id',

    // map

    '/forum-ostrova',
    '/forum-ostrova/:id',
  ],
};

const publicRoutes = [
  '/',
  '/glavnaya-rabotodatelya',
  '/korporativnyi-standart',
  '/politika-konfidencialnosti',
  '/vakansii',
  '/rezume',
  '/kompanii',
  '/investicii',
  '/vakansiya/:id',
  '/soiskatel/:id',
  '/moi-profil',
  '/kursi',
  '/kurs/:id',
  '/vneshnie-vakansii',
  '/o-nas',
  '/not-found',
  '/tekhnicheskie-raboty',
  '/ostrova-karery',
  '/kompaniya/:id',
  '/korporatsiya',
  '/praktika-studentov',
  '/zayavka',
  '/zayavka-karery',
  '/SOPD',
  '/ostrova-razvitiya',
  '/professii',
  '/kalendar-sobytij',
  '/forum-ostrova',
  '/forum-ostrova/:id',
];

const unauthorizedRoutes = ['/registraciya', '/avtorizaciya', '/zabyli-parol'];

const authorizedRoutes = [
  '/izbrannoe',
  '/izmenenie-parolya',
  '/nastrojka-uvedomlenij',
];

const applicantRoutes = [
  '/redaktirovanie-profilya',
  '/sozdanie-rezume',
  '/otkliki-i-predlozheniya',
  '/redaktirovanie-rezume',
  '/redaktirovanie-opita-raboti',
  '/redaktirovanie-portfolio',
  '/redaktirovanie-praktiki',
  '/redaktirovanie-obrazovaniya',
  '/redaktirovanie-sobytij',
  '/redaktirovanie-publikacij',
  '/redaktirovanie-kursi',
  '/kartochka-zaprosa',
  '/sfera-deyatelnosti/:id',
  '/vk-registraciya',
];

const employerRoutes = [
  '/redaktirovanie-kompanii',
  '/sozdanie-vakansii',
  '/redaktirovanie-vakansii/:id',
  '/sozdanie-kursa',
  '/redaktirovanie-kursa/:id',
  '/otkliki-kandidatov/:id',
  '/redaktirovanie-investicii',
  '/redaktirovanie-shablonov-otveta',
];

// async function fetchUser(token) {
//   return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile`, {
//     headers: { Authorization: `Bearer ${token}` },
//   }).then((res) => res.json());
// }

export default async function middleware(req) {
  let token = req.cookies.get('auth_token')?.value;

  if (req.nextUrl.searchParams.get('admin_auth_token')) {
    token = req.nextUrl.searchParams.get('admin_auth_token');
  }

  // const response = await fetchUser(token);
  // const user = response?.user ?? null;
  //
  // // проверка на технические работы
  // if (
  //   'is_site_working' in response &&
  //   req.nextUrl.pathname !== '/tekhnicheskie-raboty'
  // ) {
  //   return NextResponse.redirect(
  //     new URL(staticLinks.engineeringWorks, req.url)
  //   );
  // } else if (
  //   req.nextUrl.pathname === '/tekhnicheskie-raboty' &&
  //   !('is_site_working' in response)
  // ) {
  //   return NextResponse.redirect(new URL(staticLinks.applicantMain, req.url));
  // }
  //
  // // скрытие карты острова
  // if (req.nextUrl.pathname.includes('forum-ostrova')) {
  //   console.log('Found a forum-ostrova');
  //   return NextResponse.redirect(new URL(staticLinks.applicantMain, req.url));
  // }
  //
  // if (user) {
  //   // если авторизован
  //   const role = user?.role;
  //
  //   if (role === 'applicant') {
  //     // дейстивия для applicant
  //     const isFull = user?.applicant_profile?.is_full_profile;
  //
  //     if (!isFull) {
  //       // аккаунт не дозаполнен
  //       console.log('this-account-is-not-complete');
  //
  //       if (req.nextUrl.pathname === '/vk-registraciya') {
  //         return NextResponse.next();
  //       } else {
  //         return NextResponse.redirect(
  //           new URL(staticLinks.vkRegistration, req.url)
  //         );
  //       }
  //     } else {
  //       // полный аккаунт
  //       console.log('complete-applicant-account');
  //
  //       if (employerRoutes.includes(req.nextUrl.pathname)) {
  //         return NextResponse.redirect(new URL(staticLinks.notFound, req.url));
  //       } else if (unauthorizedRoutes.includes(req.nextUrl.pathname)) {
  //         return NextResponse.redirect(
  //           new URL(staticLinks.applicantMain, req.url)
  //         );
  //       } else {
  //         return NextResponse.next();
  //       }
  //     }
  //   } else {
  //     // действия для employer
  //     console.log('employer-account');
  //
  //     if (applicantRoutes.includes(req.nextUrl.pathname)) {
  //       return NextResponse.redirect(new URL(staticLinks.notFound, req.url));
  //     } else if (unauthorizedRoutes.includes(req.nextUrl.pathname)) {
  //       return NextResponse.redirect(
  //         new URL(staticLinks.employerMain, req.url)
  //       );
  //     } else {
  //       return NextResponse.next();
  //     }
  //   }
  // } else {
  //   // действия для не авторизованного пользователя
  //   console.log('unauthorized-account');
  //
  //   if (
  //     publicRoutes.includes(req.nextUrl.pathname) ||
  //     unauthorizedRoutes.includes(req.nextUrl.pathname)
  //   ) {
  //     return NextResponse.next();
  //   } else {
  //     return NextResponse.redirect(new URL(staticLinks.authorization, req.url));
  //   }
  // }
}
