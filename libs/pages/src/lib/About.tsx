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
    <div className="motion-preset-fade-md flex flex-col text-primary">
      <AboutHero />
      <AboutOrigin />
      <AboutValues />
      <AboutFounders />
      <AboutProcess />
    </div>
  )
}

export default memo(About)
