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
    <div className="flex flex-col space-y-4 w-full p-10 pb-5">
      <h1 className="text-5xl font-bold tracking-tight">Products</h1>
      <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
        <div className="flex-center relative w-96 border-box h-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon className="h-4 w-4" />
          </span>
          <Input
            className="pl-9 h-12"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch(filterByName(e.target.value))
            }
            placeholder="Search products..."
          />
        </div>

        <DropdownMenu onOpenChange={setIsMenuOpen} open={isMenuOpen}>
          <DropdownMenuTrigger asChild className="relative">
            <Button
              className="flex-center gap-4 pt-6 pb-6 pr-14 pl-14 h-10 w-22"
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
            className="p-2 border-box w-[200px] h-37 overflow-hidden absolute -left-35"
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

export default memo(ProductsHeader)
