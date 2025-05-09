import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  hero1Movie,
  hero2Movie,
  hero3Movie,
  hero4Movie,
} from '@sas-mrts/common'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function getVideoSrc(index: number) {
  // Ensure index is between 1 and 4
  const normalizedIndex = ((index - 1) % 4) + 1

  switch (normalizedIndex) {
    case 1:
      return hero1Movie
    case 2:
      return hero2Movie
    case 3:
      return hero3Movie
    case 4:
      return hero4Movie
    default:
      return hero1Movie
  }
}

function playPromiseChecker(playPromise: Promise<void>) {
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        return playPromise
      })
      .catch((error) => {
        return error
      })
  }
}

export { cn, getVideoSrc, playPromiseChecker }
