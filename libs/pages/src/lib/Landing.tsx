const h1Content =
  'Welcome to Stone & Sable, where functionality meets artistry in every ' +
  'piece we offer. Illuminate your space with our curated collection of ' +
  'distinctive lamps, anchor your rooms with our quality furniture, and ' +
  'find the perfect seating that invites both comfort and conversation.'

function Landing() {
  return (
    <div className="flex flex-col ">
      <div className="flex p-15 items-center justify-around">
        <h1 className="text-6xl tracking-wide leading-20 w-11/12">
          Modern <span className="font-bold">Living</span>,<br />
          <span className="font-bold">Timless </span>
          Design
        </h1>
        <p className="flex flex-wrap text-3xl font-extralight tracking-tighter">
          {h1Content.split(' ').map((word, index) => (
            <span
              className={`
                motion-preset-blur-up-lg
                ${
                  word === 'functionality' ||
                  word === 'Illuminate' ||
                  word === 'comfort'
                    ? 'font-bold'
                    : 'font-extralight'
                }
                mr-2
              `}
              key={index}
              style={{ animationDuration: `${index * 0.1}s` }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export { Landing }
