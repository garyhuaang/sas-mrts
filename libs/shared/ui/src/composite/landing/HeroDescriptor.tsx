import { FadeWordsIn } from '../../base'

export const h1Content =
  'Welcome to Stone & Sable, where functionality meets artistry in every ' +
  'piece we offer. Illuminate your space with our curated collection of ' +
  'distinctive lamps, anchor your rooms with our quality furniture, and ' +
  'find the perfect seating that invites both comfort and conversation.'

export const highlightWords = [
  'functionality',
  'artistry',
  'quality',
  'comfort',
  'conversation.',
]

function HeroDescriptor() {
  return (
    <div className="h-full w-full grid grid-cols-12 mt-15 md:mb-50">
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
        className="col-span-7 flex mt-30 p-30 text-3xl font-extralight self-center"
        data-speed="0.2"
      >
        <FadeWordsIn highlightWords={highlightWords} words={h1Content} />
      </div>
    </div>
  )
}

export { HeroDescriptor }
