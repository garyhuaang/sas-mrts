import { memo } from 'react'

import {
  AboutFounders,
  AboutHero,
  AboutOrigin,
  AboutProcess,
  AboutValues,
} from '@sas-mrts/ui'

function About() {
  return (
    <div className="flex flex-col text-primary motion-preset-fade-md">
      <AboutHero />
      <AboutOrigin />
      <AboutValues />
      <AboutFounders />
      <AboutProcess />
    </div>
  )
}

export default memo(About)
