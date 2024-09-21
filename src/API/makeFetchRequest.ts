import { cookies } from 'next/headers';

export default async function makeFetchRequest(
  input: URL | RequestInfo,
  init?: RequestInit
): Promise<Response> {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${input}`;
  const token = cookies().get('auth_token')?.value;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    ...init,
  });

  return response;
}
