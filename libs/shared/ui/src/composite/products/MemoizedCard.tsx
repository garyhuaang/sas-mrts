import { memo } from 'react'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '../../base'
import { toUppercaseWords } from '../../lib'

import { numToUSD } from '@sas-mrts/common'
import type { Product } from '@sas-mrts/rStore'

const MemoizedCard = memo(
  ({
    product,
    onAddToCart,
  }: {
    product: Product
    onAddToCart: (product: Product) => void
  }) => {
    return (
      <Card className="max-w-[333px] min-w-9 min-h-100 motion-preset-fade-sm shadow-sm">
        <CardContent className="p-0">
          <img
            alt={product.attributes.title}
            className="h-64 w-full min-w-9 rounded-t-lg"
            src={product.attributes.image}
          />
          <div className="flex flex-col gap-2 p-4">
            <CardTitle className="flex justify-start font-medium">
              {toUppercaseWords(product?.attributes?.title)}
            </CardTitle>
            <div className="flex justify-between">
              <CardDescription className="flex justify-center">
                {product.attributes.category}
              </CardDescription>
              <CardDescription className="flex justify-center font-bold text-primary">
                {numToUSD(Number(product.attributes.price))}
              </CardDescription>
            </div>
            <Button className="mt-2" onClick={() => onAddToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }
)

MemoizedCard.displayName = 'MemoizedCard'

export default MemoizedCard
