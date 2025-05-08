import { values } from '@sas-mrts/common'

function AboutValues() {
  return (
    <div className="section-bg-primary">
      <div className="flex flex-col items-center pt-32 pb-32">
        <h2 className="md:text-[2.25em] font-bold p-0">Our Values</h2>
        <p className="text-muted-foreground md:text-xl relaxed font-normal mb-7">
          The principles that guide everything we do
        </p>
        <div className="flex gap-4 ">
          {values.map((value, index) => (
            <div
              className="flex flex-col items-center space-y-4 text-center"
              key={index}
            >
              <div className="flex bg-secondary rounded-full h-12 w-12 items-center justify-center p-2">
                {<value.image className="h-10 w-10" />}
              </div>
              <div className="font-bold text-xl">{value.value}</div>
              <div className="text-center w-3/4">{value.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { AboutValues }
