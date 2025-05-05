import { useSelector } from 'react-redux'

import { type Products, selectProducts } from '@sas-mrts/rStore'

function Products() {
  const products: Products = useSelector(selectProducts)

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <div>{product.attributes.title}</div>
          <div>{product.attributes.company}</div>
          <div>{product.attributes.category}</div>
          <div>{product.attributes.description}</div>
          <div>{product.attributes.createdAt}</div>
          <br />
        </div>
      ))}
    </div>
  )
}

export { Products }
