import { Button } from '../../base/Button'

import ThemeToggle from './ThemeToggle'

import { CartIcon } from '@sas-mrts/common'

function NavActions() {
  return (
    <div className="flex gap-4 m-0 p-0">
      <ThemeToggle />
      <Button asChild className="p-3 cursor-pointer" variant="outline">
        <CartIcon className="h-12 w-12" />
      </Button>
    </div>
  )
}

export default NavActions
