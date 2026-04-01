import Image, { ImageProps } from 'next/image'

interface AppImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function AppImage({ src, ...props }: AppImageProps) {
  // Add basePath prefix for relative paths
  const finalSrc = src.startsWith('/') && !src.startsWith('/bia-psi/') 
    ? `/bia-psi${src}`
    : src

  return <Image src={finalSrc} {...props} />
}
