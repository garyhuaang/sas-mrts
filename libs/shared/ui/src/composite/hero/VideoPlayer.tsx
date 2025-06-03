import { memo } from 'react'

function VideoPlayer({
  videoPlayerRef,
}: {
  videoPlayerRef: React.RefObject<HTMLVideoElement | null>
}) {
  return (
    <video
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover opacity-0
    [will-change:opacity]"
      ref={videoPlayerRef}
    />
  )
}

export default memo(VideoPlayer)
