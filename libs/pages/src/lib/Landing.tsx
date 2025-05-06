import {
  FeaturedProducts,
  HeroDescriptor,
  HeroProducts,
  SmoothScroller,
} from '@sas-mrts/ui'

function Landing() {
  return (
    <SmoothScroller ignoreMobileResize={true}>
      <div
        className="flex flex-col items-center justify-center self-center box-border"
        id="landing"
      >
        <HeroDescriptor />
        <HeroProducts />
        <FeaturedProducts />
      </div>
    </SmoothScroller>
  )
}

export { Landing }
