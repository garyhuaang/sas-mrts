import { values } from '@sas-mrts/common'

function AboutValues() {
  return (
    <section className="section-bg-primary">
      <div className="flex flex-col items-center pb-32 pt-32">
        <h2 className="p-0 font-bold md:text-[2.25em]">Our Values</h2>
        <p className="relaxed mb-7 font-normal text-muted-foreground md:text-xl">
          The principles that guide everything we do
        </p>
        <div className="flex gap-4">
          {values.map((value, index) => (
            <div
              className="flex flex-col items-center space-y-4 text-center"
              key={index}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary p-2">
                {<value.image className="h-10 w-10" />}
              </div>
              <div className="text-xl font-bold">{value.value}</div>
              <div className="w-3/4 text-center">{value.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { AboutValues }
