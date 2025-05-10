import { Label } from '../../base'

import { ArrowUpDownIcon } from '@sas-mrts/common'

function ProductIndicators() {
  return (
    <div className="flex justify-between w-full p-10 pb-0">
      <Label className="font-semibold text-lg w-1/3">Filters</Label>
      <div className="flex justify-between w-5/6 pl-2">
        <Label className="text-sm text-muted-foreground">{`Showing ${0} products`}</Label>
        <ArrowUpDownIcon className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  )
}

export { ProductIndicators }
