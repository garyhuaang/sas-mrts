import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'

import { Button } from '../../base'

import { logoutUser, rStore } from '@sas-mrts/rStore'

const AuthHeader = function AuthHeader() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookies] = useCookies()

  const handleLogout = () => {
    rStore.dispatch(logoutUser())
    setCookies('user', null)

    document.startViewTransition(() => {
      window.matchMedia('/')
    })
  }

  return (
    <div className="backdrop-blur-sm ">
      <div
        className="flex justify-end items-center gap-2 h-[30px] p-2
        bg-background opacity-95"
      >
        {localStorage.getItem('username') ? (
          <div>
            <span className="text-primary text-sm">
              {`Hello ${localStorage.getItem('username')}!`}
              <Button onClick={handleLogout} variant="link">
                <Link viewTransition className="text-primary" to="/auth">
                  Logout
                </Link>
              </Button>
            </span>
          </div>
        ) : (
          <Button className="text-primary text-xs" variant="link">
            <Link viewTransition to="/auth">
              Login/Register
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

export { AuthHeader }
