import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type SmoothScrollerProps = {
  children: ReactNode
  smoothness?: number
  ignoreMobileResize?: boolean
}

function SmoothScroller({
  children,
  smoothness,
  ignoreMobileResize = true,
}: SmoothScrollerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger)
  const navAuthHeight = document.getElementById('#nav-auth')?.scrollHeight
  // let scrollPosition = 0
  // let smoother: ScrollSmoother | null = null

  useGSAP(
    () => {
      ScrollTrigger.create({
        markers: true,
        trigger: '#nav-auth',
        pin: true,
        pinSpacing: false,
        start: '#outlet-content',
        end: 'max',
      })

      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: smoothness,
        effects: true,
        ignoreMobileResize: ignoreMobileResize,
        normalizeScroll: true,
      })
    },
    { scope: contentRef }
  )

  // useEffect(() => {
  //   const navHeight =
  //     document.querySelector('#nav-auth')?.getBoundingClientRect().height || 132

  //   const outletContent = document.querySelector('#outlet-content')
  //   if (outletContent) {
  //     ;(outletContent as HTMLElement).style.paddingTop = `${navHeight}px`
  //   }

  //   const createSmoother = (): ScrollSmoother => {
  //     if (smoother) {
  //       scrollPosition = smoother.scrollTop()
  //       smoother.kill()
  //     }

  //     setTimeout(() => {
  //       // Now pin the nav-auth to the top
  //       ScrollTrigger.create({
  //         trigger: '#nav-auth',
  //         start: 'top top',
  //         end: 'max',
  //         pin: true,
  //         pinSpacing: false,
  //         onRefresh: (self) => console.log('Pin refreshed', self),
  //       })
  //     }, 100)

  //     smoother = ScrollSmoother.create({
  //       wrapper: wrapperRef.current,
  //       content: contentRef.current,
  //       smooth: smoothness,
  //       effects: true,
  //       ignoreMobileResize: ignoreMobileResize,
  //       normalizeScroll: true,
  //     })

  //     if (scrollPosition > 0) {
  //       smoother.scrollTo(scrollPosition, false)
  //     }

  //     return smoother
  //   }

  //   smoother = createSmoother()

  //   return () => {
  //     if (smoother) smoother.kill()
  //   }
  // }, [smoothness])

  return (
    <div ref={wrapperRef} id="smooth-main">
      <div id="smooth-content" ref={contentRef}>
        {children}
      </div>
    </div>
  )
}

export { SmoothScroller }
