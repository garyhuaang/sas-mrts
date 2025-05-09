import { Link } from 'react-router-dom'

import { Button } from '../../base'

import { logoutUser, rStore } from '@sas-mrts/rStore'

const AuthHeader = function AuthHeader() {
  const store = rStore.getState()

  return (
    <div className="flex justify-end items-center gap-2 h-[30px] p-2 bg-background">
      {store.user.confirmed ? (
        <div>
          <span>
            {`Hello ${store.user.username}!`}
            <Button
              onClick={() => rStore.dispatch(logoutUser())}
              variant="link"
            >
              <Link viewTransition to="/">
                Logout
              </Link>
            </Button>
          </span>
        </div>
      ) : (
        <Button className="text-primary text-xs cursor-pointer" variant="link">
          <Link viewTransition to="/auth">
            Login/Register
          </Link>
        </Button>
      )}
    </div>
  )
}

export { AuthHeader }
