function FadeWordsIn({
  words,
  highlightWords,
}: {
  words: string
  highlightWords?: string[]
}) {
  return (
    <p className="flex flex-wrap items-center justify-center tracking-wide leading-relaxed">
      {words.split(' ').map((word, index) => (
        <span
          className={`
                mr-2
                motion-preset-blur-up-lg
                ${
                  highlightWords?.includes(word)
                    ? 'font-bold'
                    : 'font-extralight'
                }
                `}
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
