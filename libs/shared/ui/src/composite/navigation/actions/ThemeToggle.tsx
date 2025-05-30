import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../index'

import { MoonIcon, SunIcon } from '@sas-mrts/common'
import { setTheme, useAppDispatch } from '@sas-mrts/rStore'

function ThemeToggle() {
  const dispatch = useAppDispatch()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-12 w-12 cursor-pointer p-3" variant="outline">
          <SunIcon className="h-15 w-15 dark:-rotate-100 absolute rotate-0 scale-100 transition-all dark:scale-0" />
          <MoonIcon className="aboslute h-15 w-15 rotate-100 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => dispatch(setTheme('dark'))}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(setTheme('light'))}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => dispatch(setTheme('system'))}>
            System
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle
