import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { getVideoSrc } from '../../lib/utils'

import { VideoPreview } from './VideoPreview'

function HeroMovies() {
  gsap.registerPlugin(ScrollTrigger)

  const [currentVideoDataIndex, setCurrentVideoDataIndex] = useState<number>(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const totalVideos = 4
  const videoPlayerARef = useRef<HTMLVideoElement>(null)
  const videoPlayerBRef = useRef<HTMLVideoElement>(null)

  const [activePlayer, setActivePlayer] =
    useState<React.RefObject<HTMLVideoElement | null>>(videoPlayerARef)

  const [standbyPlayer, setStandbyPlayer] =
    useState<React.RefObject<HTMLVideoElement | null>>(videoPlayerBRef)

  const standbyVideoDataIndex = (currentVideoDataIndex % totalVideos) + 1

  const [visualPreviewIndex, setVisualPreviewIndex] = useState<number>(
    (1 % totalVideos) + 1
  )

  // Initial setup for the active player (only on mount)
  useEffect(() => {
    const activeEl = activePlayer.current

    if (activeEl) {
      activeEl.src = getVideoSrc(currentVideoDataIndex)
      gsap.set(activeEl, { opacity: 1, zIndex: 1 })
      activeEl.muted = true

      activeEl.play()
    }

    setVisualPreviewIndex((currentVideoDataIndex % totalVideos) + 1)

    const initialStandbyEl = videoPlayerBRef.current

    if (initialStandbyEl) {
      const initialStandbyIndex = (currentVideoDataIndex % totalVideos) + 1

      initialStandbyEl.src = getVideoSrc(initialStandbyIndex)
      gsap.set(initialStandbyEl, { opacity: 0, zIndex: 0 })
      initialStandbyEl.muted = true
      initialStandbyEl.currentTime = 0
      initialStandbyEl.load()
      initialStandbyEl.play()
    }
  }, [])

  // Setup standby video source
  useEffect(() => {
    const standbyEl = standbyPlayer.current

    if (standbyEl) {
      standbyEl.src = getVideoSrc(standbyVideoDataIndex)
      gsap.set(standbyEl, { opacity: 0, zIndex: 0 })
      standbyEl.muted = true
      standbyEl.currentTime = 0
      standbyEl.load()
      standbyEl.play()
    }
  }, [standbyPlayer, standbyVideoDataIndex])

  const handleMiniVideoClick = () => {
    if (isTransitioning || !activePlayer.current || !standbyPlayer.current)
      return

    setIsTransitioning(true)

    const outgoingEl = activePlayer.current
    const incomingEl = standbyPlayer.current
    const newCurrentAfterTransition = standbyVideoDataIndex

    setVisualPreviewIndex((newCurrentAfterTransition % totalVideos) + 1)

    if (incomingEl) {
      incomingEl.muted = true
      incomingEl.play()
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setActivePlayer(standbyPlayer)
        setStandbyPlayer(activePlayer)
        setCurrentVideoDataIndex(standbyVideoDataIndex)
        setIsTransitioning(false)
      },
    })

    tl.to(outgoingEl, { opacity: 0, duration: 0.3, zIndex: 0 }, 'crossfade').to(
      incomingEl,
      { opacity: 1, duration: 0.3, zIndex: 1 },
      'crossfade'
    )
  }

  return (
    <div className="relative flex-1 flex flex-col group">
      <div
        className="h-full relative flex items-center justify-center"
        id="video-frame"
        style={{ overflow: 'hidden' }}
      >
        <video
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0
          [will-change:opacity]"
          ref={videoPlayerARef}
        />
        <video
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0
          [will-change:opacity]"
          ref={videoPlayerBRef}
        />
        <VideoPreview
          handleMiniVideoClick={handleMiniVideoClick}
          nextVideoIndex={visualPreviewIndex}
        />
      </div>
      <h1 className="absolute bottom-5 right-5 text-secondary text-4xl z-40">
        STONE & SABLE
      </h1>
    </div>
  )
}

export { HeroMovies }
