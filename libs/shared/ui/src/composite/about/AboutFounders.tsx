import { buisnessPartners } from '@sas-mrts/common'

function AboutFounders() {
  return (
    <div className="section-bg-secondary flex justify-center">
      <div className="grid grid-cols-1 place-items-center p-6 md:grid-cols-2">
        <div className="flex h-full justify-center">
          <img
            className="h-[420px] w-[390px] self-center rounded-lg"
            loading="lazy"
            src={buisnessPartners}
          />
        </div>
        <h2 className="p-10 font-bold md:text-[2.25em]">
          Meet Our Founders
          <section className="relaxed font-normal text-muted-foreground md:text-xl">
            <p>
              Stone & Sable was founded in 2010 by designers Emma Stone and
              Michael Sable, who shared a vision for creating furniture that
              blends timeless elegance with modern functionality.
            </p>
            <p className="mt-4">
              What began as a small workshop in Brooklyn has grown into a
              beloved brand known for exceptional craftsmanship and thoughtful
              design. Our journey has been guided by a simple philosophy: create
              pieces that people will cherish for generations.
            </p>
          </section>
        </h2>
      </div>
    </div>
  )
}

export { AboutFounders }
