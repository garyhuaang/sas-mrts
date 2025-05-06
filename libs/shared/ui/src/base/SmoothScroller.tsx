import { useEffect, useRef, useState, type ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type SmoothScrollerProps = {
  children: ReactNode
  smoothness?: number
  ignoreMobileResize?: boolean
}

type WindowSize = {
  height: number
  width: number
}

function SmoothScroller({
  children,
  smoothness,
  ignoreMobileResize = true,
}: SmoothScrollerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: 0,
    width: 0,
  })
  let scrollPosition = 0
  let smoother: ScrollSmoother | null = null

  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger)

    setWindowSize({ height: window.innerHeight, width: window.innerWidth })

    const createSmoother = (): ScrollSmoother => {
      if (smoother) {
        scrollPosition = smoother.scrollTop()
        smoother.kill()
      }

      smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: smoothness,
        effects: true,
        ignoreMobileResize: ignoreMobileResize,
        normalizeScroll: true,
      })

      return smoother
    }

    smoother = createSmoother()

    const handleResize = () => {
      // Only recreate if the width changed significantly (prevents multiple triggers)
      if (Math.abs(window.innerWidth - windowSize.width) > 50) {
        setWindowSize({ ...windowSize, width: window.innerWidth })
      }
      if (Math.abs(window.innerHeight - windowSize.height) > 50) {
        setWindowSize({ ...windowSize, height: window.innerHeight })
      }
      smoother = createSmoother()
    }

    // Debounced resize handler to prevent too many recreations
    let resizeTimer: number
    const debouncedResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(handleResize, 250)
    }

    window.addEventListener('resize', debouncedResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize)
      if (smoother) smoother.kill()
    }
  }, [smoothness])

  return (
    <div
      ref={wrapperRef}
      id="smooth-main"
      className="reduced-viewport w-full min-h-full"
    >
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  )
}

export { SmoothScroller }
