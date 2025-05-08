import { getVideoSrc } from '../../lib/utils'

type CurrentVideoProps = {
  handleVideoLoad: () => void
  currentVideoRef: React.RefObject<HTMLVideoElement | null>
  currentVideoIndex: number
}

function CurrentVideo({
  handleVideoLoad,
  currentVideoRef,
  currentVideoIndex,
}: CurrentVideoProps) {
  return (
    <video
      autoPlay
      loop
      playsInline
      className="aboslute left-0 top-0 size-full object-cover object-center"
      onLoadedData={handleVideoLoad}
      ref={currentVideoRef}
      src={getVideoSrc(currentVideoIndex)}
    />
  )
}

export { CurrentVideo }
