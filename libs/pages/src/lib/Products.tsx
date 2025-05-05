import { useSelector } from 'react-redux'

import { Card } from '@sas-mrts/ui'

import { type Products, selectProducts } from '@sas-mrts/rStore'

function Products() {
  const products: Products = useSelector(selectProducts)

  return (
    <div className="">
      {products?.map((product) => (
        <Card
          className="flex flex-col h-80 w-80 justify-center items-center p-4 box-border gap-4"
          key={product.id}
        >
          <img
            className="h-65 w-72 rounded-lg"
            src={product.attributes.image}
          />
          <h2 className="font-bold">{product.attributes.title}</h2>
          <div>{product.attributes.price}</div>
          <br />
        </Card>
      ))}
    </div>
  )
}

export { Products }
