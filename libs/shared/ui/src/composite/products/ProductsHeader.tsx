import { useState } from 'react'

import {
  Button,
  Command,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Label,
} from '../../base'

import {
  ChevronDownIcon,
  ChevronUpIcon,
  productsSortOptions,
} from '@sas-mrts/common'

function ProductsHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex justify-between w-full p-10 pb-0">
      <div className="flex flex-col">
        <Label>Products</Label>
        <Command placeholder="Search products..." />
      </div>

      <DropdownMenu onOpenChange={setIsMenuOpen} open={isMenuOpen}>
        <DropdownMenuTrigger asChild className="relative">
          <Button
            className="flex-center gap-4 pt-6 pb-6 pr-14 pl-14 h-10 w-22"
            variant="outline"
          >
            <Label className="text-lg">Sort</Label>
            {isMenuOpen ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="p-2 border-box w-[200px] h-37 overflow-hidden absolute -left-35"
          sideOffset={6}
        >
          {productsSortOptions.map((option, index) => (
            <DropdownMenuItem
              key={index}
              onSelect={() => {
                console.log('Selected sort:', option)
                // setIsMenuOpen(false) // Optional: close menu on select
              }}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export { ProductsHeader }
