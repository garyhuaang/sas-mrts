import { Label } from '../../base'

import { ArrowUpDownIcon } from '@sas-mrts/common'

function ProductIndicators() {
  return (
    <div className="flex justify-between mb-6 border-box w-full">
      <div className="flex justify-between w-full pl-2">
        <Label className="text-sm text-muted-foreground">{`Showing ${0} products`}</Label>
        <ArrowUpDownIcon className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  )
}

export { ProductIndicators }
