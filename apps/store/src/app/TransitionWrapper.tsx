import React, { useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { AuthHeader, NavBar, SofaBackDrop } from '@sas-mrts/ui'

import { userShopRoutes } from '@sas-mrts/pages'

// You'll need to ensure your CSS for 'fade' transitions is globally available
// or imported here if scoped.
// import './path-to-your-global-animations.css';

const TransitionWrapper: React.FC = () => {
  const location = useLocation()
  const nodeRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="flex flex-col w-full sticky top-0 z-50">
        <AuthHeader />
        <NavBar routes={userShopRoutes} />
      </div>
      <SwitchTransition>
        <CSSTransition
          unmountOnExit
          classNames="fade" // Or your desired classNames
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300} // Or your desired timeout
        >
          <div ref={nodeRef}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
      <SofaBackDrop />
    </>
  )
}

export default TransitionWrapper
