// Detecta o ambiente e define URLs dinamicamente
export const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // Client-side
    return window.location.origin
  }
  // Server-side
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://beatrizsilvestrelira.com.br'
}

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://beatrizsilvestrelira.com.br'
export const IMAGES_PATH = '/images'
export const PUBLIC_URL = BASE_URL + IMAGES_PATH
