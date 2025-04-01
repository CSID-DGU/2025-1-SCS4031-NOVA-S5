import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ecok',
    short_name: 'Ecok',
    description: 'Integrated Stamp Management Service, Ecok',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/ecokIcon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/ecokIcon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}