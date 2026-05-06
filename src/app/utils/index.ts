export const isMinimal =
  typeof window === 'undefined' ||
  window.innerWidth < 768 ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const normalizedBase = basePath.endsWith('/')
    ? basePath.slice(0, -1)
    : basePath;

  return `${normalizedBase}${normalizedPath}`;
}
