import { processes, woodWork } from '@sas-mrts/common'

function AboutProcess() {
  return (
    <section className="section-bg-primary flex justify-center">
      <div className="grid grid-cols-1 place-items-center gap-4 p-6 md:grid-cols-2">
        <h2 className="p-10 font-bold md:text-[2.25em]">
          Our Process
          <section className="relaxed mb-4 font-normal text-muted-foreground md:text-xl">
            <p>
              Every Stone & Sable piece begins with a sketch and ends with a
              carefully crafted object that will become part of your home's
              story.
            </p>
            <p className="mt-4">
              What began as a small workshop in Brooklyn has grown into a
              beloved brand known for exceptional craftsmanship and thoughtful
              design. Our journey has been guided by a simple philosophy: create
              pieces that people will cherish for generations.
            </p>
          </section>
          {processes.map((process, index) => (
            <section className="flex gap-4" key={index}>
              <div className="flex h-[25px] min-w-[25px] max-w-[25px] items-center justify-center rounded-full bg-muted-foreground text-sm text-secondary">
                {index + 1}
              </div>
              <div className="flex flex-col">
                <h3 className="leading-none md:text-lg">{process.name}</h3>
                <p className="mb-2 font-light leading-6 md:text-base">
                  {process.description}
                </p>
              </div>
            </section>
          ))}
        </h2>

        <div className="flex h-full justify-center">
          <img
            className="h-[400px] w-[491px] self-center rounded-lg"
            loading="lazy"
            src={woodWork}
          />
        </div>
      </div>
    </section>
  )
}

export { AboutProcess }
