import { getVideoSrc } from '../../lib/utils'

type ViewPreviewProps = {
  handleMiniVideoClick: () => void
  nextVideoRef: React.RefObject<HTMLVideoElement | null>
  nextVideoIndex: number
}

function VideoPreview({
  handleMiniVideoClick,
  nextVideoRef,
  nextVideoIndex,
}: ViewPreviewProps) {
  return (
    <div
      className="flex items-center mask-clip-path absolute z-50 size-64
      cursor-pointer overflow-hidden rounded-lg"
    >
      <div
        className="scale-50 opacity-0 transition-all ease-in hover:scale-100 hover:opacity-100"
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
  )
}

export { VideoPreview }
