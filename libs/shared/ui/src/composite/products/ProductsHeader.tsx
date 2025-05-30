import { type ChangeEvent, memo, useState } from 'react'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Label,
} from '../../base'

import {
  ChevronDownIcon,
  ChevronUpIcon,
  productSortOptions,
  SearchIcon,
} from '@sas-mrts/common'
import {
  filterByName,
  setSort,
  type SortProducts,
  useAppDispatch,
} from '@sas-mrts/rStore'

function ProductsHeader() {
  const dispatch = useAppDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex w-full flex-col space-y-4 p-10 pb-5">
      <h1 className="text-5xl font-bold tracking-tight">Products</h1>
      <div className="flex w-full flex-col justify-between gap-4 sm:flex-row">
        <div className="flex-center border-box relative h-full w-96">
          <span className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2">
            <SearchIcon className="h-4 w-4" />
          </span>
          <Input
            className="h-12 pl-9"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch(filterByName(e.target.value))
            }
            placeholder="Search products..."
          />
        </div>

        <DropdownMenu onOpenChange={setIsMenuOpen} open={isMenuOpen}>
          <DropdownMenuTrigger asChild className="relative">
            <Button
              className="flex-center w-22 h-10 gap-4 pb-6 pl-14 pr-14 pt-6"
              variant="outline"
            >
              <Label className="text-medium">Sort</Label>
              {isMenuOpen ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="border-box h-37 -left-35 absolute w-[200px] overflow-hidden p-2"
            sideOffset={6}
          >
            {productSortOptions.map((option, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => dispatch(setSort(option.action as SortProducts))}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default ProductsHeader
