import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chimpwriter — Recording in. Research packet out.',
  description: 'Local-first desktop software that turns YouTube, audio, and video into structured transcripts, readable articles, subtitles, and citations.',
  metadataBase: new URL('https://chimpwriter.rook.works'),
  openGraph: { title: 'Chimpwriter — Recording in. Research packet out.', description: 'Turn YouTube, audio, and video into clean, citable research—locally.', type: 'website', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Chimpwriter', description: 'Recording in. Research packet out.', images: ['/og.png'] },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#0b5ce0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
