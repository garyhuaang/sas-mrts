import { Label } from '../../base'

import { ArrowUpDownIcon } from '@sas-mrts/common'

function ProductIndicators() {
  return (
    <div className="flex justify-between w-full p-10 pb-0">
      <Label className="font-bold text-lg">Filters</Label>
      <Label className="flex justify-start">{`Showing ${0} products`}</Label>
      <ArrowUpDownIcon className="h-4 w-4" />
    </div>
  )
}

export { ProductIndicators }
