import { Button } from '../../base/Button'

import { MoonIcon, SunIcon } from '@sas-mrts/common'

function ThemeToggle() {
  return (
    <Button asChild className="p-3 cursor-pointer" variant="outline">
      <MoonIcon className="h-12 w-12" />
    </Button>
  )
}

export default ThemeToggle
