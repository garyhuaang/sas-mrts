import { processes, woodWork } from '@sas-mrts/common'

function AboutProcess() {
  return (
    <div className="flex justify-center section-bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-4 place-items-center">
        <h2 className="md:text-[2.25em] font-bold p-10">
          Our Process
          <section className="text-muted-foreground md:text-xl relaxed font-normal mb-4">
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
              <div
                className="flex bg-muted-foreground rounded-full h-[25px] max-w-[25px] min-w-[25px]
                  items-center justify-center text-sm text-secondary
                "
              >
                {index + 1}
              </div>
              <div className="flex flex-col">
                <h3 className="md:text-lg leading-none">{process.name}</h3>
                <p className="md:text-base font-light leading-6 mb-2">
                  {process.description}
                </p>
              </div>
            </section>
          ))}
        </h2>

        <div className="h-full flex justify-center ">
          <img
            className="h-[400px] w-[491px] rounded-lg self-center"
            src={woodWork}
          />
        </div>
      </div>
    </div>
  )
}

export { AboutProcess }
