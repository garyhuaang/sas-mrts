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
      className="absolute left-0 top-0 h-full w-full object-cover opacity-0 [will-change:opacity]"
      ref={videoPlayerRef}
    />
  )
}

export default memo(VideoPlayer)
