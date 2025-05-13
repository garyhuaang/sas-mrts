import { Button, Checkbox, Label, Separator, Switch } from '../../base'
import { Slider } from '../../base/slider'

import { categories, companies, numToUSD, TruckIcon } from '@sas-mrts/common'
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
          max={59999}
          min={8500}
          onValueChange={(e: number[]) => handleSliderChange(e)}
          step={10}
        />
      </div>
      <Separator />

      <div className="flex flex-col gap-2">
        <Label className="text-lg font-medium">Category</Label>
        <Button className="w-1/6" onClick={() => dispatch(resetCatgories())}>
          Reset
        </Button>
        <Separator className="bg-primary w-20" />
        {categories.map((category, index) => (
          <div
            className="flex gap-2"
            key={index}
            onClick={() => dispatch(setCategory(category))}
          >
            <Checkbox
              checked={selector.categories.includes(category)}
              id={`category-${category}`}
            />
            <Label className="text-sm font-medium">{category}</Label>
          </div>
        ))}
      </div>
      <Separator className="bg-primary" />

      <div className="flex flex-col gap-2">
        <Label className="text-md font-medium">Company</Label>
        <Button className="w-1/6" onClick={() => dispatch(resetCompanies())}>
          Reset
        </Button>
        {companies.map((company, index) => (
          <div
            className="flex gap-2"
            key={index}
            onClick={() => dispatch(setCompany(company))}
          >
            <Checkbox
              checked={selector.companies.includes(company)}
              id={`company-${company}`}
            />
            <Label className="text-sm font-medium">{company}</Label>
          </div>
        ))}
      </div>
      <Separator className="bg-primary" />

      <div className="flex gap-4">
        <Switch onClick={() => dispatch(setFreeShipping())} />
        <Label className="flex text-md font-medium gap-2">
          <TruckIcon /> Free shipping only
        </Label>
      </div>
    </div>
  )
}

export default ProductsMoreFilters
