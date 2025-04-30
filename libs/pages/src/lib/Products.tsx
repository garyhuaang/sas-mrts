import { type Products, useAppSelector } from '@sas-mrts/rStore'

function Products() {
  const products = useAppSelector((state) => [[state.products.products]])

  return (
    <div>
      {products?.map((product) => (
        <div key={products.toString()}>{product.toString()}</div>
      ))}
    </div>
  )
}

export { Products }
