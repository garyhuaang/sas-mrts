import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '../../base'

import { numToUSD } from '@sas-mrts/common'
import type { Products } from '@sas-mrts/rStore'

function ProductCards({ products }: { products: Products }) {
  return (
    <>
      {products.map((product) => (
        <Card className="max-w-full min-h-100" key={product.id}>
          <CardContent className="p-0">
            <img
              className="h-64 w-full rounded-t-lg"
              src={product.attributes.image}
            />
            <div className="flex flex-col gap-2 p-4">
              <CardTitle className="flex justify-start font-medium">
                {product.attributes.title}
              </CardTitle>
              <div className="flex justify-between">
                <CardDescription className="flex justify-center">
                  {product.attributes.category}
                </CardDescription>
                <CardDescription className="flex justify-center font-bold text-primary">
                  {numToUSD(Number(product.attributes.price))}
                </CardDescription>
              </div>
              <Button className="mt-2" variant="secondary">
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
