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
    <section className="flex h-[30px] items-center justify-end gap-2 bg-background p-2">
      {localStorage.getItem('username') ? (
        <section>
          <span className="text-sm text-primary">
            {`Hello ${localStorage.getItem('username')}!`}
            <Button onClick={handleLogout} variant="link">
              <Link viewTransition className="text-primary" to="/auth">
                Logout
              </Link>
            </Button>
          </span>
        </section>
      ) : (
        <Button className="text-xs text-primary" variant="link">
          <Link viewTransition to="/auth">
            Login/Register
          </Link>
        </Button>
      )}
    </section>
  )
}

export { AuthHeader }
