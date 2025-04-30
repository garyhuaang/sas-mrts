import { useDispatch } from 'react-redux'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../index'

import { MoonIcon, SunIcon } from '@sas-mrts/common'
import { setTheme } from '@sas-mrts/rStore'

function ThemeToggle() {
  const dispatch = useDispatch()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="p-3 cursor-pointer w-12 h-12" variant="outline">
          <SunIcon className="absolute h-15 w-15 rotate-0 scale-100 transition-all dark:-rotate-100 dark:scale-0" />
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
