import hero3 from '../../assets/hero3.jpg'
import { Separator } from '../../base'

function FeaturedProducts() {
  return (
    <h1
      className="flex flex-wrap flex-col p-19 pr-5 gap-4 text-7xl mt-100 md:mt-100
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
  )
}

export { FeaturedProducts }
