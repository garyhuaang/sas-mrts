import { Checkbox, Label, Separator, Switch } from '../../base'
import { Slider } from '../../base/slider'

import { categoryToggles, companyToggles, TruckIcon } from '@sas-mrts/common'

function ProductsMoreFilters() {
  return (
    <div className="flex flex-col w-1/3 min-h-full gap-8">
      <Label className="font-semibold text-lg w-1/3">Filters</Label>
      <div className="flex flex-col space-y-4">
        <Label className="text-md font-medium">Price Range</Label>
        <Slider max={2000} step={10} />
      </div>
      <Separator />

      <div className="flex flex-col gap-2">
        <Label className="text-md font-medium">Category</Label>
        {categoryToggles.map((category) => (
          <div className="flex gap-2">
            <Checkbox />
            <Label className="text-sm font-medium">{category.label}</Label>
          </div>
        ))}
      </div>
      <Separator />

      <div className="flex flex-col gap-2">
        <Label className="text-md font-medium">Company</Label>
        {companyToggles.map((category) => (
          <div className="flex gap-2">
            <Checkbox />
            <Label className="text-sm font-medium">{category.label}</Label>
          </div>
        ))}
      </div>
      <Separator />

      <div className="flex gap-4">
        <Switch />
        <Label className="flex text-md font-medium gap-2">
          <TruckIcon /> Free shipping only
        </Label>
      </div>
    </div>
  )
}

export default ProductsMoreFilters
