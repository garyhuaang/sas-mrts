import { useRef } from 'react'
import gsap from 'gsap'

import './styles.css'

import { useGSAP } from '@gsap/react'

function PageLoading({ loading }: { loading: boolean }) {
  gsap.registerPlugin(useGSAP)

  const spinner = useRef(null)

  useGSAP(() => {
    if (!loading) {
      gsap.to(spinner.current, {
        opacity: 0,
        duration: 0.5,
        zIndex: -1,
      })
    }
  }, [loading])

  return (
    loading && (
      <div className="spinner-wrapper bg-background" ref={spinner}>
        <div className="spinner">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube" />
            <div className="sk-cube2 sk-cube" />
            <div className="sk-cube4 sk-cube" />
            <div className="sk-cube3 sk-cube" />
          </div>
        </div>
      </div>
    )
  )
}

export { PageLoading }
