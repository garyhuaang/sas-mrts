import { getVideoSrc } from '../../lib/utils'

type NextVideoProps = {
  handleVideoLoad: () => void
  nextVideoRef: React.RefObject<HTMLVideoElement | null>
  nextVideoIndex: number
}

function NextVideo({
  handleVideoLoad,
  nextVideoRef,
  nextVideoIndex,
}: NextVideoProps) {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
      id="next-video"
      onLoadedData={handleVideoLoad}
      ref={nextVideoRef}
      src={getVideoSrc(nextVideoIndex)}
    />
  )
}

export { NextVideo }
