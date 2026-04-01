/**
 * Adiciona o basePath ao início de um URL relativo.
 * Usado para compatibilidade com GitHub Pages e outros ambientes com subpasta.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/bia-psi'

export function withBasePath(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path
  }
  if (path.startsWith(basePath)) {
    return path
  }
  return `${basePath}${path}`
}
