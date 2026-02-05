import { Anton, Manrope } from 'next/font/google'

export const anton = Anton({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const manrope = Manrope({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})