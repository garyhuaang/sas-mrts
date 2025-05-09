import { useSelector } from 'react-redux'

import { Card, CardContent, CardDescription, CardTitle } from '../../base'

import { type Products, selectProducts } from '@sas-mrts/rStore'

function ProductsList() {
  const products: Products = useSelector(selectProducts)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12 h-full">
      {products.map((product) => (
        <Card className="max-w-90" key={product.id}>
          <CardContent>
            <CardTitle className="flex justify-center mb-4 mt-4">
              {product.attributes.title}
            </CardTitle>
            <img
              className="h-64 w-full rounded-lg"
              src={product.attributes.image}
            />
            <CardDescription className="flex justify-center mt-4">
              {product.attributes.price}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { ProductsList }
