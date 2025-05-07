import { buisnessPartners } from '@sas-mrts/common'

function AboutFounders() {
  return (
    <div className="flex justify-center min-h-[536px]">
      <div className="section-bg-secondary" />
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 place-items-center">
        <div className="h-full flex justify-center ">
          <img
            className="h-[420px] w-[390px] rounded-lg self-center"
            src={buisnessPartners}
          />
        </div>
        <h2 className="md:text-[2.25em] font-bold p-10">
          Meet Our Founders
          <section className="text-muted-foreground md:text-xl relaxed font-normal">
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
