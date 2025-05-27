import { ProductsHeader, ProductsList } from '@sas-mrts/ui'

function Products() {
  return (
    <div className="overlflow-hidden">
      <div className="sticky items-center justify-center w-full">
        <ProductsHeader />
      </div>
      <ProductsList />
    </div>
  )
}

export { Products }
