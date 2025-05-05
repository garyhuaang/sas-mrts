import { Button } from '../../base/Button'

import { SofaIcon } from '@sas-mrts/common'

function NavLogo() {
  return (
    <Button asChild className="p-2 cursor-pointer">
      <SofaIcon className="h-12 w-12" />
    </Button>
  )
}

export { NavLogo }
