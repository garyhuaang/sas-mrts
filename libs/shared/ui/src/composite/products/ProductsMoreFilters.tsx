import { Label, Separator, Switch } from '../../base'
import { Slider } from '../../base/slider'

import { ProductCheckboxes } from './ProductCheckboxes'

import { categories, companies, numToUSD, TruckIcon } from '@sas-mrts/common'
import {
  setFreeShipping,
  setPriceRange,
  useAppDispatch,
  useAppSelector,
} from '@sas-mrts/rStore'

function ProductsMoreFilters() {
  const selector = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const handleSliderChange = (e: number[]) => {
    dispatch(setPriceRange(e[0]))
  }

  return (
    <div className="flex flex-col w-1/3 min-h-full gap-8">
      <Label className="font-semibold text-lg w-1/3">Filters</Label>
      <div className="flex flex-col space-y-4">
        <Label className="text-md font-medium">{`Price Range - ${numToUSD(selector.priceRange)}`}</Label>
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
        checkboxType="categories"
      />
      <ProductCheckboxes
        checkboxContents={companies}
        checkboxType="companies"
      />

      <div className="flex gap-4">
        <Switch
          checked={selector.freeShipping}
          onClick={() => dispatch(setFreeShipping())}
        />
        <Label className="flex text-md font-medium gap-2">
          <TruckIcon /> Free shipping only
        </Label>
      </div>
    </div>
  )
}

export default ProductsMoreFilters
