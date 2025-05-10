import { useSelector } from 'react-redux'

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '../../base'

import { type Products, selectProducts } from '@sas-mrts/rStore'

function ProductsList() {
  const products: Products = useSelector(selectProducts)

  return (
    <div className="flex w-full p-10 pt-3 gap-8">
      <div className="bg-red-600 min-h-full w-1/3">lol</div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-6 h-full"
      >
        {products.map((product) => (
          <Card className="min-w-11/12 min-h-100" key={product.id}>
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
                    {product.attributes.price}
                  </CardDescription>
                </div>
                <Button className="mt-2" variant="secondary">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export { ProductsList }
