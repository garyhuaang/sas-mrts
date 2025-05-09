import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  getVideoSrc,
  playPromiseChecker,
  VideoPlayer as VideoPlayerA,
  VideoPlayer as VideoPlayerB,
  VideoPreview,
} from '@sas-mrts/ui'

import { useGSAP } from '@gsap/react'

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
  useGSAP(() => {
    const activeEl = activePlayer.current

    if (activeEl?.checkVisibility) {
      activeEl.src = getVideoSrc(currentVideoDataIndex)
      gsap.set(activeEl, { opacity: 1, zIndex: 1 })
      activeEl.muted = true
      const playPromise = activeEl.play()

      playPromiseChecker(playPromise)
    }

    setVisualPreviewIndex((currentVideoDataIndex % totalVideos) + 1)

    const initialStandbyEl = videoPlayerBRef.current

    if (initialStandbyEl?.checkVisibility) {
      const initialStandbyIndex = (currentVideoDataIndex % totalVideos) + 1

      initialStandbyEl.src = getVideoSrc(initialStandbyIndex)
      gsap.set(initialStandbyEl, { opacity: 0, zIndex: 0 })
      initialStandbyEl.muted = true
      const playPromise = initialStandbyEl.play()

      playPromiseChecker(playPromise)
    }
  }, [])

  // Setup standby video source
  useGSAP(() => {
    const standbyEl = standbyPlayer.current

    if (standbyEl?.checkVisibility) {
      standbyEl.src = getVideoSrc(standbyVideoDataIndex)
      gsap.set(standbyEl, { opacity: 0, zIndex: 0 })
      standbyEl.muted = true
      const playPromise = standbyEl.play()

      playPromiseChecker(playPromise)
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
    <div className="relative flex-1 flex flex-col ">
      <div
        className="h-full relative flex items-center justify-center"
        id="video-frame"
        style={{ overflow: 'hidden' }}
      >
        <VideoPlayerA videoPlayerRef={videoPlayerARef} />
        <VideoPlayerB videoPlayerRef={videoPlayerBRef} />
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
