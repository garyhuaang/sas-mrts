import {
  AboutFounders,
  AboutHero,
  AboutOrigin,
  AboutProcess,
  AboutValues,
} from '@sas-mrts/ui'

function About() {
  return (
    <div className="flex flex-col text-primary">
      <AboutHero />
      <AboutOrigin />
      <AboutValues />
      <AboutFounders />
      <AboutProcess />
    </div>
  )
}

export { About }
