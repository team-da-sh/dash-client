const noop = () => {};

const mockRouter = {
  push: noop,
  replace: noop,
  refresh: noop,
  back: noop,
  forward: noop,
  prefetch: noop,
};

export function useRouter() {
  return mockRouter;
}

export function usePathname(): string {
  return '/';
}

export function useSearchParams(): ReadonlyURLSearchParams | null {
  return typeof window !== 'undefined' ? new ReadonlyURLSearchParams(window.location.search) : null;
}

class ReadonlyURLSearchParams {
  private params: URLSearchParams;

  constructor(init?: string | URLSearchParams) {
    this.params = new URLSearchParams(init);
  }

  get(name: string): string | null {
    return this.params.get(name);
  }

  getAll(name: string): string[] {
    return this.params.getAll(name);
  }

  has(name: string): boolean {
    return this.params.has(name);
  }

  keys(): IterableIterator<string> {
    return this.params.keys();
  }

  values(): IterableIterator<string> {
    return this.params.values();
  }

  entries(): IterableIterator<[string, string]> {
    return this.params.entries();
  }

  forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void): void {
    this.params.forEach(callbackfn);
  }

  toString(): string {
    return this.params.toString();
  }
}
