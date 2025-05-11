import { Link } from 'react-router-dom'

import { Button } from '../../base/button'

import { SofaIcon } from '@sas-mrts/common'

function NavLogo() {
  return (
    <Button asChild className="p-2">
      <Link viewTransition className="h-12 w-12" to="/">
        <SofaIcon className="h-12 w-12" />
      </Link>
    </Button>
  )
}

export { NavLogo }
