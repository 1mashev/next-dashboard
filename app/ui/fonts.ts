import { Inter, Roboto_Mono, Lusitana, Poppins } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const lusitana = Lusitana({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
});

export const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

