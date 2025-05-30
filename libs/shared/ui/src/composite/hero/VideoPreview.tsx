import { memo } from 'react'

import { getVideoSrc } from './utils'

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
    <div className="group absolute z-50 flex h-full w-full items-center justify-center">
      <div className="mask-clip-path absolute z-10 size-64 cursor-pointer overflow-hidden rounded-lg">
        <div
          className="scale-50 opacity-0 transition-all ease-in group-hover:scale-100 group-hover:opacity-100"
          onClick={handleMiniVideoClick}
        >
          <video
            autoPlay
            loop
            muted
            className="size-64 scale-150 object-cover object-center"
            key={videoSrc}
            src={videoSrc}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(VideoPreview)
