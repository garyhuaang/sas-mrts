import { memo } from 'react'

import { Label } from '../../base'

import {
  ArrowDownUpIcon,
  ArrowLeftRightIcon,
  ArrowRightLeftIcon,
  ArrowUpDownIcon,
} from '@sas-mrts/common'
import { useAppSelector } from '@sas-mrts/rStore'

function ProductIndicators() {
  const filteredItems = useAppSelector((state) => state.products)

  const renderSortIcon = () => {
    switch (filteredItems.sortOrder) {
      case 'NAME_A_Z':
        return <ArrowUpDownIcon className="h-4 w-4" />
      case 'NAME_Z_A':
        return <ArrowDownUpIcon className="h-4 w-4" />
      case 'PRICE_L_H':
        return <ArrowLeftRightIcon className="h-4 w-4" />
      case 'PRICE_H_L':
        return <ArrowRightLeftIcon className="h-4 w-4" />
      default:
        return <ArrowUpDownIcon className="h-4 w-4" />
    }
  }

  return (
    <div className="flex justify-between mb-6 border-box w-full border-b-2">
      <div className="flex justify-between w-full pl-2">
        <Label className="text-sm text-foreground">{`Showing ${filteredItems.filteredItems.length} products`}</Label>
        {renderSortIcon()}
      </div>
    </div>
  )
}

export default memo(ProductIndicators)
