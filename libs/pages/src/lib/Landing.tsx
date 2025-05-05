import { useRef } from 'react'

import { FadeWordsIn, Separator, SmoothScroller } from '@sas-mrts/ui'

import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import { h1Content, highlightWords } from '../constants'

function Landing() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <SmoothScroller ignoreMobileResize={true}>
      <div className="box-border" ref={containerRef}>
        <div className="flex flex-col items-center justify-center self-center">
          <div className="h-full w-full grid grid-cols-12 mt-15">
            <h1
              className="col-span-5 flex flex-wrap p-19 pr-5 gap-4 text-7xl
              items-center justify-center self-center
              motion-preset-fade-lg"
              data-speed="0.2"
            >
              Modern<span className="font-bold">Living</span>
              <br />
              <span className="font-bold">Timeless</span> Design
            </h1>
            <div
              className="col-span-7 flex p-20 text-3xl font-extralight self-center"
              data-speed="0.2"
            >
              <FadeWordsIn highlightWords={highlightWords} words={h1Content} />
            </div>
          </div>

          <article className="flex flex-col items-center pt-600 w-full">
            <img
              className="md:h-200 md:w-200 h-100 w-100 rounded-lg"
              data-speed="0.4"
              id="hero1"
              src={hero1}
            />
            <img
              className="md:h-90 md:w-90 lg:ml-200 lg:mt-50 h-80 w-80 ml-100 mt-25 rounded-lg"
              data-speed="0.7"
              id="hero2"
              src={hero2}
            />
            <img
              className="h-100 w-100 rounded-lg"
              data-speed="0.5"
              id="hero3"
              src={hero3}
            />
            <img
              className="md:h-90 md:w-90 lg:ml-200 lg:mt-50  h-80 w-80 mr-400 rounded-lg"
              data-speed="0.9"
              id="hero4"
              src={hero4}
            />
          </article>

          <h1
            className="flex flex-wrap flex-col p-19 pr-5 gap-4 text-7xl mt-100
              items-center justify-center self-center"
            data-speed="0.6"
          >
            Featured Products
            <Separator className="w-full" />
            <div className="flex flex-wrap p-10 justify-center gap-4">
              <img className="h-100 w-100 rounded-lg" id="hero3" src={hero3} />
              <img className="h-100 w-100 rounded-lg" id="hero3" src={hero3} />
              <img className="h-100 w-100 rounded-lg" id="hero3" src={hero3} />
            </div>
          </h1>
        </div>
      </div>
    </SmoothScroller>
  )
}

export { Landing }
