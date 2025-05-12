import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { Button, Checkbox, Label, Separator, Switch } from '../../base'
import { Slider } from '../../base/slider'

import { categories, companies, numToUSD, TruckIcon } from '@sas-mrts/common'
import {
  categoryFormSchema,
  type companyFormSchema,
  setCategory,
  setCompany,
  setPriceRange,
  useAppDispatch,
  useAppSelector,
} from '@sas-mrts/rStore'

type resetProps = 'COMPANY' | 'CATEGORY'

function ProductsMoreFilters() {
  const selector = useAppSelector((state) => state.products)
  const dispatch = useAppDispatch()

  const categoryForm = useForm<z.infer<typeof categoryFormSchema>>({
    defaultValues: {
      kids: false,
      sofas: false,
      beds: false,
      tables: false,
      chairs: false,
    },
  })

  const companyForm = useForm<z.infer<typeof companyFormSchema>>({
    defaultValues: {
      artifax: false,
      luxora: false,
      homestead: false,
      modenza: false,
      comfora: false,
    },
  })

  const handleReset = (value: resetProps) => {
    return value === 'CATEGORY' ? categoryForm.reset() : companyForm.reset()
  }

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

      <form
        className="flex flex-col gap-2"
        onSubmit={() => handleReset('CATEGORY')}
      >
        <Label className="text-lg font-medium">Category</Label>
        <Button className="w-1/6">Reset</Button>
        <Separator className="bg-primary w-20" />
        {categories.map((category, index) => (
          <div className="flex gap-2" key={index}>
            <Checkbox
              id={`category-${category}`}
              onClick={() => dispatch(setCategory(category))}
            />
            <Label className="text-sm font-medium">{category}</Label>
          </div>
        ))}
      </form>
      <Separator className="bg-primary" />

      <form
        className="flex flex-col gap-2"
        onSubmit={() => handleReset('COMPANY')}
      >
        <Label className="text-md font-medium">Company</Label>
        <Button className="w-1/6">Reset</Button>
        {companies.map((company, index) => (
          <div className="flex gap-2" key={index}>
            <Checkbox />
            <Label
              className="text-sm font-medium"
              onClick={() => dispatch(setCompany(company))}
            >
              {company}
            </Label>
          </div>
        ))}
      </form>
      <Separator className="bg-primary" />

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
