import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { CurrentVideo } from './CurrentVideo'
import { NextVideo } from './NextVideo'
import { VideoPreview } from './VideoPreview'

import { useGSAP } from '@gsap/react'

function HeroMovies() {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(1)
  const [hasClicked, setHasClicked] = useState<boolean>(false)
  const [loadedVideos, setLoadedVideos] = useState<number>(0)
  const totalVideos = 4
  const nextVideoIndex = (currentVideoIndex % totalVideos) + 1
  const nextVideoRef = useRef<HTMLVideoElement>(null)
  const currentVideoRef = useRef<HTMLVideoElement>(null)
  const videoFrameRef = useRef<HTMLDivElement>(null)

  const handleMiniVideoClick = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentVideoIndex(nextVideoIndex)
        setHasClicked(true)
      },
    })

    tl.to('#next-video', {
      opacity: 1,
      duration: 0,
    })

    tl.to('#current-video', {
      opacity: 1,
      duration: 0,
    })
  }

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1)
  }

  useEffect(() => {
    if (currentVideoRef.current) {
      const playPromise = currentVideoRef.current as HTMLVideoElement

      playPromise.muted = true
    }

    if (nextVideoRef.current) {
      const playPromise = nextVideoRef.current as HTMLVideoElement

      playPromise.play()
    }
  }, [currentVideoIndex])

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.to('#next-video', {
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          duration: 1,
          ease: 'power1.inOut',
        })
        gsap.from('#current-video', {
          transformOrigin: 'center center',
          scale: 1,
          duration: 1,
          ease: 'power1.inOut',
        })
      }
    },
    { dependencies: [currentVideoIndex], revertOnUpdate: true }
  )

  useGSAP(() => {
    if (hasClicked) {
      gsap.set('#video-frame', {
        borderRadius: '0% 0% 40% 10%',
        ease: 'power1.inOut',
      })
      gsap.from('#video-frame', {
        borderRadius: '0% 0% 40%% 10%',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '#video-frame',
          start: 'center center',
          end: 'bottom center',
          scrub: true,
        },
      })
    }
  })

  return (
    <div className="h-[calc(100vh-110px)] group">
      <div
        className="flex flex-col items-center justify-center h-full"
        id="video-frame"
        ref={videoFrameRef}
      >
        <CurrentVideo
          currentVideoIndex={currentVideoIndex}
          currentVideoRef={currentVideoRef}
          handleVideoLoad={handleVideoLoad}
        />
        {/* <NextVideo
          handleVideoLoad={handleVideoLoad}
          nextVideoIndex={nextVideoIndex}
          nextVideoRef={nextVideoRef}
        /> */}
        <VideoPreview
          handleMiniVideoClick={handleMiniVideoClick}
          nextVideoIndex={nextVideoIndex}
        />
      </div>
      <h1 className="absolute bottom-5 right-5 text-secondary text-4xl z-50">
        STONE & SABLE
      </h1>
    </div>
  )
}

export { HeroMovies }
