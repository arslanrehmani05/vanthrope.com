import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vanthrope | Operational Systems & Autonomous Agents',
    short_name: 'Vanthrope',
    description: 'Custom operational software, deterministic data pipelines, and autonomous agent swarms for mid-market enterprises.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-maskable-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Case Studies',
        short_name: 'Work',
        description: 'View verified production enterprise deployments',
        url: '/work',
        icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Autonomous Agents',
        short_name: 'Agents',
        description: 'Autonomous operational agent architecture',
        url: '/agents',
        icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Proof Ledger',
        short_name: 'Proof',
        description: 'Audited enterprise systems proof ledger',
        url: '/proof-ledger',
        icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Book Discovery Call',
        short_name: 'Contact',
        description: 'Schedule a 20-min operational discovery call',
        url: '/contact',
        icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }],
      },
    ],
  };
}
