function FadeWordsIn({
  words,
  highlightWords,
}: {
  words: string
  highlightWords?: string[]
}) {
  return (
    <p className="flex flex-wrap items-center justify-center leading-relaxed tracking-wide">
      {words.split(' ').map((word, index) => (
        <span
          className={`motion-preset-blur-up-lg mr-2 ${
            highlightWords?.includes(word) ? 'font-bold' : 'font-extralight'
          } `}
          key={index}
          style={{ animationDuration: `${index * 0.1}s` }}
        >
          {word}
        </span>
      ))}
    </p>
  )
}

export { FadeWordsIn }
