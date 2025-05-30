import { useCallback, useMemo } from 'react'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '../../base'
import { toUppercaseWords, useToast } from '../../lib'

import { numToUSD } from '@sas-mrts/common'
import {
  addToCart,
  type Product,
  useAppDispatch,
  useAppSelector,
} from '@sas-mrts/rStore'

function ProductCards() {
  const { toast } = useToast()
  const dispatch = useAppDispatch()
  const filteredItems = useAppSelector((state) => state.products.filteredItems)

  const addProductToCart = useCallback(
    (product: Product) => {
      toast({
        title: 'Item added to cart!',
        description: `${toUppercaseWords(product?.attributes?.title)} in cart`,
      })
      dispatch(addToCart(product))
    },
    [toast]
  )

  const visibleCards = useMemo(() => {
    return filteredItems.map((product: Product) => (
      <Card
        className="min-h-100 motion-preset-fade-lg min-w-9 max-w-[333px] shadow-sm"
        key={product.id}
      >
        <CardContent className="p-0">
          <img
            className="h-64 w-full min-w-9 rounded-t-lg"
            loading="lazy"
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
            <Button className="mt-2" onClick={() => addProductToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    ))
  }, [filteredItems])

  return <>{visibleCards}</>
}

export default ProductCards
