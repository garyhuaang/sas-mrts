import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  hero1Movie,
  hero2Movie,
  hero3Movie,
  hero4Movie,
} from '@sas-mrts/common'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getVideoSrc(index: number) {
  if (index === 1) return hero1Movie
  else if (index === 2) return hero2Movie
  else if (index === 3) return hero3Movie
  else if (index === 4) return hero4Movie
}
