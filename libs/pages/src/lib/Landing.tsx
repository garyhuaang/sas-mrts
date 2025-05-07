import { FeaturedProducts, HeroDescriptor, HeroProducts } from '@sas-mrts/ui'

function Landing() {
  return (
    <div
      className="flex flex-col items-center justify-center self-center box-border"
      id="landing"
    >
      <HeroDescriptor />
      <HeroProducts />
      <FeaturedProducts />
    </div>
  )
}

export { Landing }
