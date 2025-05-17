import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '../../base'
import { toUppercaseWords } from '../../lib'

import { numToUSD } from '@sas-mrts/common'
import {
  addToCart,
  type Product,
  useAppDispatch,
  useAppSelector,
} from '@sas-mrts/rStore'

function ProductCards() {
  const filteredItems = useAppSelector((state) => state.products.filteredItems)
  const dispatch = useAppDispatch()

  return (
    <>
      {filteredItems?.map((product: Product) => (
        <Card
          className="max-w-11/12 min-w-9 min-h-100 motion-preset-fade-lg"
          key={product.id}
        >
          <CardContent className="p-0">
            <img
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
              <Button
                className="mt-2"
                onClick={() => dispatch(addToCart(product))}
                variant="secondary"
              >
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default ProductCards
