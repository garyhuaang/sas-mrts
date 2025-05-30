import { hero1 } from '@sas-mrts/common'

function AboutOrigin() {
  return (
    <div className="flex justify-center">
      <div className="section-bg-secondary">
        <div className="grid grid-cols-1 place-items-center gap-4 p-6 md:grid-cols-2">
          <h2 className="p-10 font-bold md:text-[2.25em]">
            Where It All Began
            <section className="relaxed font-normal text-muted-foreground md:text-xl">
              <p>
                Stone & Sable was founded in 2010 by designers Emma Stone and
                Michael Sable, who shared a vision for creating furniture that
                blends timeless elegance with modern functionality.
              </p>
              <p className="mt-4">
                What began as a small workshop in Brooklyn has grown into a
                beloved brand known for exceptional craftsmanship and thoughtful
                design. Our journey has been guided by a simple philosophy:
                create pieces that people will cherish for generations.
              </p>
            </section>
          </h2>
          <div className="flex h-full justify-center">
            <img
              className="h-[400px] w-[491px] self-center rounded-lg"
              loading="lazy"
              src={hero1}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { AboutOrigin }
