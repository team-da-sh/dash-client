type AuthFetchInit = RequestInit & {
  headers?: HeadersInit;
};

export async function authFetch(path: string, init: AuthFetchInit = {}) {
  const url = new URL(`api/${path}`, process.env.BACKEND_BASE_URL);

  const headers = new Headers(init.headers ?? {});

  if (!headers.has('Accept')) {
    headers.set('Accept', 'application/json');
  }

  if (init.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  return fetch(url, {
    cache: 'no-store',
    ...init,
    headers,
  });
}
