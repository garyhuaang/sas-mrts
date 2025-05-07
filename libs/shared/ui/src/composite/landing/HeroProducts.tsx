import { hero1, hero2, hero3, hero4 } from '@sas-mrts/common'

function HeroProducts() {
  return (
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
        className="lg:ml-200 lg:mt-50 lg:mb-50  h-80 w-80 mr-400 rounded-lg"
        data-speed="0.7"
        id="hero4"
        src={hero4}
      />
    </article>
  )
}

export { HeroProducts }
