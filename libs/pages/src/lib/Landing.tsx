import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { FadeWordsIn } from '@sas-mrts/ui'

import hero1 from '../assets/hero1.jpg'

import { useGSAP } from '@gsap/react'
import { SofaIcon } from '@sas-mrts/common'

function Landing() {
  gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger)

  const h1Content =
    'Welcome to Stone & Sable, where functionality meets artistry in every ' +
    'piece we offer. Illuminate your space with our curated collection of ' +
    'distinctive lamps, anchor your rooms with our quality furniture, and ' +
    'find the perfect seating that invites both comfort and conversation.'

  const highlightWords = [
    'functionality',
    'artistry',
    'quality',
    'comfort',
    'conversation.',
  ]

  const main = useRef<HTMLDivElement>(null)
  const smoother = useRef<ScrollSmoother>(null)

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      })
      ScrollTrigger.create({
        trigger: '.hero1',
        pin: true,
        start: 'center center',
        end: '+=300',
        markers: true,
      })
    },
    { scope: main }
  )

  return (
    <div
      className="h-[calc(100vh-132px)] box-border overflow-auto"
      id="smooth-wrapper"
      ref={main}
    >
      <div
        className="flex flex-col h-full w-full max-h-[calc(100vh-132px)] fixed
        text-gray-700 opacity-15 -z-10 overflow-hidden justify-center"
      >
        <SofaIcon className="w-250 h-250 self-center" />
      </div>

      <div
        className="flex flex-col items-center justify-center"
        id="smooth-content"
      >
        <div className="h-full">
          <div className="grid grid-cols-12 w-full">
            <h1
              className="h1 col-span-5 flex flex-wrap p-19 pr-5 gap-4 text-7xl
              items-center justify-center self-center"
              data-speed="0.5"
            >
              Modern<span className="font-bold">Living</span>
              <br />
              <span className="font-bold">Timeless</span> Design
            </h1>
            <div
              className="h1-p col-span-7 flex p-20 text-3xl font-extralight self-center"
              data-speed="0.8"
            >
              <FadeWordsIn highlightWords={highlightWords} words={h1Content} />
            </div>
          </div>
        </div>
        <article className="flex justify-center pt-400" data-speed="1.5">
          <img
            className="hero1 flex h-100 w-100 self-center"
            id="hero1"
            src={hero1}
          />
        </article>
      </div>
    </div>
  )
}

export { Landing }
