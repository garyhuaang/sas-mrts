import { getVideoSrc } from '../../lib/utils'

type ViewPreviewProps = {
  handleMiniVideoClick: () => void
  nextVideoIndex: number
}

function VideoPreview({
  handleMiniVideoClick,
  nextVideoIndex,
}: ViewPreviewProps) {
  const videoSrc = getVideoSrc(nextVideoIndex)

  return (
    <div className="group flex z-50 items-center justify-center absolute h-full w-full">
      <div
        className="bg-black h-full w-full opacity-0
      transition-all duration-150 group-hover:opacity-30"
      />
      <div
        className=" mask-clip-path absolute size-64
      cursor-pointer overflow-hidden rounded-lg"
      >
        <div
          className="scale-50 opacity-0 transition-all ease-in group-hover:scale-100
          group-hover:opacity-100"
          onClick={handleMiniVideoClick}
        >
          <video
            autoPlay
            loop
            muted
            className="size-64 object-cover object-center scale-150"
            key={videoSrc}
            src={videoSrc}
          />
        </div>
      </div>
    </div>
  )
}

export { VideoPreview }
