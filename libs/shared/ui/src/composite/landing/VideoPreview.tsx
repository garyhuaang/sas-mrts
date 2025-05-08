import { getVideoSrc } from '../../lib/utils'

type ViewPreviewProps = {
  handleMiniVideoClick: () => void
  nextVideoRef: React.RefObject<HTMLVideoElement | null>
  nextVideoIndex: number
}

function VideoPreview({
  handleMiniVideoClick,
  nextVideoIndex,
}: ViewPreviewProps) {
  return (
    <div className="group flex items-center justify-center absolute h-[calc(100vh-132px)] w-full">
      <div
        className="bg-black h-[calc(100vh-132px)] w-full opacity-0
      transition-all duration-150 group-hover:opacity-30 "
      />
      <div
        className=" mask-clip-path absolute z-50 size-64
      cursor-pointer overflow-hidden rounded-lg
      "
      >
        <div
          className="scale-50 opacity-0 transition-all ease-in group-hover:scale-100 group-hover:opacity-100"
          onClick={handleMiniVideoClick}
        >
          <video
            autoPlay
            loop
            muted
            className="size-64 object-cover object-center scale-150"
            id="current-video"
            src={getVideoSrc(nextVideoIndex)}
          />
        </div>
      </div>
    </div>
  )
}

export { VideoPreview }
