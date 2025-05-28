import { Link } from 'react-router-dom'

import { Button, Label, Separator, Switch } from '../../base'
import { Slider } from '../../base/slider'

import { ProductCheckboxes } from './ProductCheckboxes'

import {
  ArrowRightIcon,
  categories,
  companies,
  numToUSD,
  TruckIcon,
} from '@sas-mrts/common'
import {
  resetCatgories,
  resetCompanies,
  setCategory,
  setCompany,
  setFreeShipping,
  setPriceRange,
  useAppDispatch,
  useAppSelector,
} from '@sas-mrts/rStore'

function ProductsMoreFilters() {
  const productsState = useAppSelector((state) => state.products)
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  const dispatch = useAppDispatch()

  const handleSliderChange = (e: number[]) => {
    dispatch(setPriceRange(e[0]))
  }

  return (
    <div className="flex flex-col min-h-full gap-8">
      <Label className="font-semibold text-lg w-1/3">Filters</Label>
      <div className="flex flex-col space-y-4">
        <Label className="text-md font-medium">{`Price Range - ${numToUSD(productsState.priceRange)}`}</Label>
        <Slider
          defaultValue={[599.99]}
          max={599.99}
          min={85.0}
          onValueChange={(e: number[]) => handleSliderChange(e)}
          step={10}
        />
      </div>
      <Separator />

      <ProductCheckboxes
        checkboxContents={categories}
        checkedItems={productsState.categories}
        label="Categories"
        onClickCheckbox={(content) => dispatch(setCategory(content))}
        onClickReset={() => dispatch(resetCatgories())}
      />
      <ProductCheckboxes
        checkboxContents={companies}
        checkedItems={productsState.companies}
        label="Companies"
        onClickCheckbox={(content) => dispatch(setCompany(content))}
        onClickReset={() => dispatch(resetCompanies())}
      />

      <div className="flex gap-4">
        <Switch
          checked={productsState.freeShipping}
          onClick={() => dispatch(setFreeShipping())}
        />
        <Label className="flex items-center text-xs font-medium gap-2">
          <TruckIcon /> Free shipping only
        </Label>
      </div>

      <div className="flex self-end">
        <Button
          asChild
          className={`${cartItems.length < 1 && 'button-disabled'} motion-preset-fade-md`}
        >
          <Link viewTransition to="/cart">
            Cart <ArrowRightIcon className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default ProductsMoreFilters
